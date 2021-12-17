import { Router } from 'express';
import * as provasController from '../controllers/provasController';

const provasRouter = Router();

provasRouter.post('/provasprofessor', provasController.getProvas);
provasRouter.get('/disciplinas', provasController.getDisciplinas);
provasRouter.post('/profdis', provasController.getProfessoresDaDisciplina);
provasRouter.post('/prova', provasController.insertProva);
provasRouter.get('/professores', provasController.getProfessores);

export default provasRouter;
