import createHttpError from 'http-errors';

import schemas from '../schemas/schemas.js';

export default function validateSchema(schema) {
    if (!Object.prototype.hasOwnProperty.call(schemas, schema)) {
        throw new Error(`'${schema}' schema does not exist`);
    }

    return (req, res, next) => {
        const { error } = schemas[schema].validate(req.body, { abortEarly: false });

        if (error) {
            throw createHttpError(422, error);
        }

        next();
    };
}
