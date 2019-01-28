import BookController from '../controllers/BookController';

export default class Books {
  private bookController: BookController = new BookController();

  public routes(app: any): void {
    app.route('/books')
      .get(this.bookController.getBooks);
    app.route('/books/:id')
      .get(this.bookController.getBook);
  }
}
