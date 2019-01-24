import * as express from "express";
import { mainController } from "../controllers/MainController";

class MainRoutes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/", (req: express.Request, res: express.Response) =>
      mainController.root(req, res)
    );
  }
}

export const mainRoutes = new MainRoutes().router;