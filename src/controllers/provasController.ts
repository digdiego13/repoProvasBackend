import { NextFunction, Request, Response } from 'express';

import * as userService from '../services/provasService';

export async function getProvas(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const provas = await userService.getProvas();
    return res.send(provas);
  } catch (err) {
    console.error(err);
    return next(err);
  }
}
