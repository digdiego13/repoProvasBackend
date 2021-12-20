import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { clearDatabase } from '../utils/database';
import httpStatusCode from '../../src/enums/httpStatusCode';
import {
  createDisciplinas,
  createProfDis,
  createProfessores,
} from '../factories/provasFactory';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {});

afterAll(async () => {
  await clearDatabase();
  await getConnection().close();
});

describe('/profDis post', () => {
  it('should answer with status 200', async () => {
    const professoresId = await createProfessores();
    const disciplinasId = await createDisciplinas();
    const profDisId = await createProfDis(professoresId, disciplinasId);
    const response = await supertest(app)
      .post('/profdis')
      .send({ id: Number(disciplinasId) });

    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('professores');

    expect(response.status).toBe(200);
  });
  it('Wrong Object passed. should answer with bad request', async () => {
    const response = await supertest(app).post('/profdis').send({
      id: 'Wrong Obj',
    });

    expect(response.status).toBe(httpStatusCode.BAD_REQUEST);
  });
});
