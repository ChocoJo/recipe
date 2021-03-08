import express, { request, response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import Middlewares from './src/middlewares/Middlewares.js';
import Configurations from './configurations/Configurations.js'
import UserRoutes from './src/routes/User.routes.js'

const application = express();
application.use(express.json());
application.use(helmet());
application.use(morgan('common'));

UserRoutes.routes(application);
application.use(Middlewares.notFound);
application.use(Middlewares.errorHandler);

Configurations.connectToDatabase();
Configurations.connectToPort(application);