import * as express from "express";
import * as bodyParser from "body-parser";
import { IControllerConstructor, IMap } from "./shared";

export class Server {
    constructor(controllers: IControllerConstructor[], public app = express()) {
        this.configure(controllers);
    }

    private configure(controllers: IControllerConstructor[]) {
        // Router setup
        let router = express.Router();
        controllers.forEach(c => c.setupRoutes(router));
        this.app.use(router);

        //use json form parser middlware
        this.app.use(bodyParser.json());
        //use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
}