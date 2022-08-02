import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/router.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use(router);

app.use((error, req, res, next) => {
    console.log(error.code);
    const status = error.status || 500;
    const { message } = error;

    res.status(status).send(message);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
