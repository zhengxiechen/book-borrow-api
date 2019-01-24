import * as bodyParser from "body-parser";
import * as express from "express";
import { mainRoutes } from "./routes/MainRoutes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // Routing
    this.app.use("/", mainRoutes);
  }
}

export default new App().app;
