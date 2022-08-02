import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/router.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
