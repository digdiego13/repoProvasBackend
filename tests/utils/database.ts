import { getRepository } from 'typeorm';
import CategoriasEntity from '../../src/entities/categorias';

import DisciplinasEntity from '../../src/entities/disciplinas';
import ProfDisEntity from '../../src/entities/profDis';
import ProfessoresEntity from '../../src/entities/professores';
import ProvaEntity from '../../src/entities/Provas';

export async function clearDatabase() {
  await getRepository(ProvaEntity).delete({});
  await getRepository(ProfDisEntity).delete({});
  await getRepository(DisciplinasEntity).delete({});
  await getRepository(ProfessoresEntity).delete({});
  await getRepository(CategoriasEntity).delete({});
}
