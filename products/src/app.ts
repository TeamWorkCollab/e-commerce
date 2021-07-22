import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import cookieSession from 'cookie-session';

import { createProductRouter } from './routes/new';

// import { errorHandler } from '../../common/src/middlewares/error-handler';
// import { NotFoundError } from '../../common/src/errors/not-found-error';
import { errorHandler, NotFoundError } from '@vuelaine-ecommerce/common';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        //secure: true
        secure: process.env.NODE_ENV !== 'test'
    })
);

app.use(createProductRouter);
app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };