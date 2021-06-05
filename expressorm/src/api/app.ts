import express from 'express';
import {Server, createServer} from 'http';

import cors from 'cors';
import { CommonRoutes } from './routes/common.routes';
import { ProductRoutes } from './routes/products.routes';

const app: express.Application = express(); // Middleware Framework for RESTful web services

const server:Server = createServer(app);

const port:number = 3000; 

const routes:Array<CommonRoutes> = [];

// configure middleware
app.use(express.json());
app.use(cors());

routes.push(new ProductRoutes(app));

const msg = `Server running at http://localhost:${port}`; 

app.get("/", (req:express.Request, res: express.Response) => {
    res.status(200).send(msg);
});

server.listen(port, () => console.log(msg));



// process.on('SIGINT', () => {
//     console.log("Die.............");
//     process.abort();
// });








