import appService from '../service/testAppService.js';


exports.getBook = (req, res) => {
    appService.getBook(req.params.bookId, res);
};

exports.getAllBooks = (req, res) => {
    appService.getAllBooks(res);
};

exports.createBook = (req, res) => {
  appService.createBook(req.body, res);
};

exports.updateBook = (req, res) => {
    appService.updateBook(req.params.bookId, req.body, res);
};

exports.deleteBook = (req, res) => {
    appService.deleteBook(req.params.bookId, res);
};