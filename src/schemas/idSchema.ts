import Joi from 'joi';

const idSchema = Joi.object().keys({
  id: Joi.number().required(),
});

export default idSchema;
