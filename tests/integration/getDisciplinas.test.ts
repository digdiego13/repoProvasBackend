import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { clearDatabase } from '../utils/database';
import { createDisciplinas } from '../factories/provasFactory';

beforeAll(async () => {
  await init();
  await createDisciplinas();
});

beforeEach(async () => {});

afterAll(async () => {
  await clearDatabase();
  await getConnection().close();
});

describe('/professores get', () => {
  it('should answer with status 200', async () => {
    const response = await supertest(app).get('/disciplinas');

    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('nomeDisciplina');

    expect(response.status).toBe(200);
  });
});
