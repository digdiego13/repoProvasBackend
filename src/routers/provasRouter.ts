import { Router } from 'express';
import * as provasController from '../controllers/provasController';

const provasRouter = Router();

provasRouter.get('/provas', provasController.getProvas);
provasRouter.get('/disciplinas', provasController.getDisciplinas);
provasRouter.post('/profdis', provasController.getProfessoresDaDisciplina);
provasRouter.post('/prova', provasController.insertProva);

export default provasRouter;
