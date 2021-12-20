import { NextFunction, Request, Response } from 'express';
import { Prova } from '../interfaces/provaInterface';
import idSchema from '../schemas/idSchema';
import httpStatusCode from '../enums/httpStatusCode';
import provaSchema from '../schemas/provaSchema';
import * as userService from '../services/provasService';
import { Id } from '../interfaces/idInterface';

async function getProvas(req: Request, res: Response, next: NextFunction) {
  const { id }: Id = req.body;
  const isCorrectBody = idSchema.validate(req.body);
  if (isCorrectBody.error) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .send(`${isCorrectBody.error.details[0].message}`);
  }
  try {
    const provas = await userService.getProvas(Number(id));
    return res.send(provas);
  } catch (err) {
    console.error(err);
    return next(err);
  }
}

async function getProvasPorDisciplina(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id }: Id = req.body;
  const isCorrectBody = idSchema.validate(req.body);
  if (isCorrectBody.error) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .send(`${isCorrectBody.error.details[0].message}`);
  }
  try {
    const provas = await userService.getProvasPorDisciplina(Number(id));
    return res.send(provas);
  } catch (err) {
    console.error(err);
    return next(err);
  }
}

async function getDisciplinas(req: Request, res: Response, next: NextFunction) {
  try {
    const disciplinas = await userService.getDisciplinas();
    return res.send(disciplinas);
  } catch (err) {
    console.error(err);
    return next(err);
  }
}

async function getProfessoresDaDisciplina(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id }: Id = req.body;

  const isCorrectBody = idSchema.validate(req.body);
  if (isCorrectBody.error) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .send(`${isCorrectBody.error.details[0].message}`);
  }
  try {
    const professoresDaDisciplina =
      await userService.getProfessoresDaDisciplina(Number(id));
    return res.send(professoresDaDisciplina);
  } catch (err) {
    console.error(err);
    return next(err);
  }
}

async function insertProva(req: Request, res: Response, next: NextFunction) {
  const provaObjt: Prova = req.body;
  const isCorrectBody = provaSchema.validate(req.body);

  if (isCorrectBody.error) {
    return res
      .status(httpStatusCode.BAD_REQUEST)
      .send(`Campos nao preenchidos corretamente`);
  }
  try {
    const prova = await userService.postProva(provaObjt);
    return res.send(prova);
  } catch (err) {
    console.error(err);
    return next(err);
  }
}

async function getProfessores(req: Request, res: Response, next: NextFunction) {
  try {
    const professores = await userService.getProfessores();
    return res.send(professores);
  } catch (err) {
    console.error(err);
    return next(err);
  }
}

export {
  getProvas,
  getDisciplinas,
  getProfessoresDaDisciplina,
  insertProva,
  getProfessores,
  getProvasPorDisciplina,
};
