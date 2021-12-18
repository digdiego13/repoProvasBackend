import Joi from 'joi';

const provaSchema = Joi.object().keys({
  nomeProva: Joi.string().min(3).max(30).required(),
  categoriasId: Joi.number().min(1).max(5).required(),
  linkProva: Joi.string().max(300).required(),
  professorId: Joi.number().min(1).required(),
  disciplinaId: Joi.number().min(1).required(),
});

export default provaSchema;
