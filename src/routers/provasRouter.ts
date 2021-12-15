import { Router } from 'express';
import * as provasController from '../controllers/provasController';

const provasRouter = Router();

provasRouter.get('', provasController.getProvas);

export default provasRouter;
