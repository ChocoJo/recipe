import express, { request, response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const application = express();
application.use(helmet());
application.use(morgan('common'));

const checkIfAdmin = (request, response, next) => {
    console.log("is admin!");
    next();
}

application.get('/recipe', (request, response) => {
    response.send("Ditt API anrop gick igenom");
});

application.get('/throwdice', checkIfAdmin,  (request, response) => {
    response.send(Math.random().toString());
});

application.listen(3001, () => {
    console.log("Server är igång på port " + 3001);
});