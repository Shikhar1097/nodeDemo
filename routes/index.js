import book from '../controller/testAppController';

export default (app) => {
    app.route('/books')
        .get(book.getAllBooks)
        .post(book.createBook);

    app.route('/books/:bookId')
        .get(book.getBook)
        .put(book.updateBook)
        .delete(book.deleteBook);
};