import joi from 'joi';

const newUserSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
});

const userSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

export { newUserSchema, userSchema };
