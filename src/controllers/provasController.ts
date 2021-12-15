import { NextFunction, Request, Response } from 'express';

import * as userService from '../services/provasService';

async function getProvas(req: Request, res: Response, next: NextFunction) {
  try {
    const provas = await userService.getProvas();
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

export { getProvas, getDisciplinas };
