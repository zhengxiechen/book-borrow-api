import { Request, Response } from 'express';
import books = require('../db/book.json');

export default class BookController {
  public getBooks(req: Request, res: Response) {
    res.status(200).send(books);
  }

  public getBook(req:Request, res: Response) {
    const id = req.params.id;
    res.status(200).send(books[id]);
  }
}
