import * as path from "path";
import * as express from "express";
import * as reactViews from "express-react-views";
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

        // React views
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "tsx");
        this.app.engine("tsx", reactViews.createEngine());


        this.app.use(express.static(path.join(__dirname, "../dist/public")));
    }
}