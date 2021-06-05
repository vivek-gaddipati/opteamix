import express from 'express';
import {CommonRoutes} from './common.routes';

export class ProductRoutes extends CommonRoutes {
    constructor(app:express.Application) {
        super(app, "ProductsRoute");
    }
    
    configureRoutes(): express.Application {
        // http://localhost:3000/products 

        this.app.route('/products')
            .get((req:express.Request, res: express.Response) => {
                res.status(200).send("List of products");
            })
            .post((req:express.Request, res: express.Response) => {
                res.status(200).send("Post a product");
            });
        
        // http://localhost:3000/products/2
        this.app.route('/products/:id')
            .all((req:express.Request, res: express.Response, next: express.NextFunction) => {
               next();
            })
            .get((req:express.Request, res: express.Response) => {
                res.status(200).send(`Get requested for id ${req.params.id}`);
            })
            .put((req:express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.id}`);
            })
            .delete((req:express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.id}`);
            });

        return this.app;
    }
    
}
