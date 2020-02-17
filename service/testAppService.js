import appDao from '../dao/testAppDao.js';

exports.getBook = (bookId, res) => {
    appDao.getBook(bookId, res);
}

exports.getAllBooks = (res) => {
    appDao.getAllBooks(res);
}

exports.createBook = (saveBook, res) => {
    appDao.createBook(saveBook, res);
}

exports.updateBook = (bookId, updateBook, res) => {
    appDao.updateBook(bookId, updateBook, res);
}

exports.deleteBook = (bookId, res) => {
    appDao.deleteBook(bookId, res);
}