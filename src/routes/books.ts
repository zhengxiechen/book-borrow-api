import {Request, Response} from "express";

import books = require("../db/book.json"); // load our local database file

export class Pokemons {
    public routes(app): void { // received the express instance from app.ts file
        app.route("/books")
        .get((req: Request, res: Response) => {
            res.status(200).send(books);
        });
    }
  }
