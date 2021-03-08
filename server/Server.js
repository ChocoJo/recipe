import express, { request, response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import Middlewares from './src/middlewares/Middlewares.js';
import Configurations from './configurations/Configurations.js'

const application = express();
application.use(helmet());
application.use(morgan('common'));

application.use(Middlewares.notFound);
application.use(Middlewares.errorHandler);

Configurations.connectToDatabase();
Configurations.connectToPort(application);