import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import disciplinasEntity from '../entities/disciplinas';

import ProvaEntity from '../entities/Provas';
import NotFoundError from '../errors/notFoundError';

async function getProvas() {
  const provas = await getRepository(ProvaEntity).find({
    select: ['id', 'nomeProva'],
  });

  return provas;
}

async function getDisciplinas() {
  const disciplinas = await getRepository(disciplinasEntity).find({
    select: ['nomeDisciplina'],
  });

  return disciplinas;
}

export { getProvas, getDisciplinas };
