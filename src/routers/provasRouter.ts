import { Router } from 'express';
import * as provasController from '../controllers/provasController';

const provasRouter = Router();

provasRouter.get('/provas', provasController.getProvas);
provasRouter.get('/disciplinas', provasController.getDisciplinas);

export default provasRouter;
