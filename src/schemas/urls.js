import joi from 'joi';

const newUrlSchema = joi.object({
    url: joi.string().uri().required(),
});

export default newUrlSchema;
