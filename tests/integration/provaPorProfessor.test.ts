import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { clearDatabase } from '../utils/database';
import httpStatusCode from '../../src/enums/httpStatusCode';
import {
  createCategorias,
  createDisciplinas,
  createProfDis,
  createProfessores,
  createProva,
} from '../factories/provasFactory';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {});

afterAll(async () => {
  await clearDatabase();
  await getConnection().close();
});

describe('/provasprofessor post', () => {
  it('should answer with status 200', async () => {
    const professoresId = await createProfessores();
    const disciplinasId = await createDisciplinas();
    const profDisId = await createProfDis(professoresId, disciplinasId);
    const categoriasId = await createCategorias();
    const provaId = await createProva(profDisId, categoriasId);
    const response = await supertest(app)
      .post('/provasprofessor')
      .send({ id: Number(professoresId) });

    expect(response.body[0]).toEqual({
      id: expect.any(Number),
      nomeProva: expect.any(String),
      categoriasId: categoriasId,
      linkProva: expect.any(String),
      profDisId: profDisId,
      disciplinasId: disciplinasId,
      professoresId: professoresId,
      nomeProfessor: expect.any(String),
      nomeDisciplina: expect.any(String),
      periodoDisciplina: expect.any(Number),
    });

    expect(response.status).toBe(200);
  });
  it('Wrong Object passed. should answer with bad request', async () => {
    const response = await supertest(app).post('/provasprofessor').send({
      id: 'Wrong Obj',
    });

    expect(response.status).toBe(httpStatusCode.BAD_REQUEST);
  });
});
