import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { clearDatabase } from '../utils/database';
import httpStatusCode from '../../src/enums/httpStatusCode';
import {
  createDisciplinas,
  createProfDis,
  createProfessores,
  createCategorias,
  createProvaObject,
} from '../factories/provasFactory';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {});

afterAll(async () => {
  await clearDatabase();
  await getConnection().close();
});

describe('/prova Insert Prova', () => {
  it('should answer with status 200', async () => {
    const professoresId = await createProfessores();
    const disciplinasId = await createDisciplinas();
    const profDisId = await createProfDis(professoresId, disciplinasId);
    const categoriasId = await createCategorias();
    const provaObj = await createProvaObject(
      professoresId,
      disciplinasId,
      categoriasId,
    );
    const response = await supertest(app).post('/prova').send(provaObj);
    expect(response.body).toHaveProperty('identifiers');
    expect(response.body).toHaveProperty('generatedMaps');
    expect(response.body).toHaveProperty('raw');

    expect(response.status).toBe(200);
  });
  it('Wrong Object passed. should answer with bad request', async () => {
    const response = await supertest(app).post('/prova').send({
      id: 'Wrong Obj',
    });

    expect(response.status).toBe(httpStatusCode.BAD_REQUEST);
  });
});
