import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import ProvaEntity from '../entities/Provas';
import NotFoundError from '../errors/notFoundError';

export async function getProvas() {
  throw new NotFoundError('Prova nao encontrda');
  const provas = await getRepository(ProvaEntity).find({
    select: ['id', 'nomeProva'],
  });

  return provas;
}
