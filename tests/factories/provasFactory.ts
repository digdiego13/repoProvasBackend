import { getRepository } from 'typeorm';
import CategoriasEntity from '../../src/entities/categorias';
import DisciplinasEntity from '../../src/entities/disciplinas';
import ProvaEntity from '../../src/entities/Provas';
import { ProvaDB } from '../../src/interfaces/provaInterface';
import faker from 'faker';
import ProfessoresEntity from '../../src/entities/professores';
import ProfDisEntity from '../../src/entities/profDis';

async function createCategorias() {
  const categoria = await getRepository(CategoriasEntity).insert({
    nomeCategoria: 'P1',
  });
  return categoria.identifiers[0].id;
}

async function createDisciplinas() {
  const disciplinas = await getRepository(DisciplinasEntity).insert({
    nomeDisciplina: faker.name.findName(),
    periodoDisciplina: 5,
  });

  return disciplinas.identifiers[0].id;
}
async function createProfessores() {
  const professores = await getRepository(ProfessoresEntity).insert({
    nomeProfessor: faker.name.findName(),
  });

  return professores.identifiers[0].id;
}

async function createProfDis(professoresId: number, disciplinasId: number) {
  const profDis = await getRepository(ProfDisEntity).insert({
    professoresId,
    disciplinasId,
  });

  return profDis.identifiers[0].id;
}

async function createProva(profDisId: number, categoriasId: number) {
  const prova = await getRepository(ProvaEntity).insert({
    nomeProva: faker.name.findName(),
    categoriasId,
    profDisId,
    linkProva: faker.internet.url(),
  });

  return prova.identifiers[0].id;
}

async function createProvaObject(
  professorId: number,
  disciplinaId: number,
  categoriasId: number,
) {
  const provaObjt = {
    nomeProva: faker.name.findName(),
    categoriasId,
    linkProva: faker.internet.url(),
    professorId,
    disciplinaId,
  };

  return provaObjt;
}

export {
  createDisciplinas,
  createCategorias,
  createProfessores,
  createProfDis,
  createProva,
  createProvaObject,
};
