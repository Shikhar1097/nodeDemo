import book from '../models/BookModel.js';

exports.getBook = (bookId, res) => {
    book.findById(bookId, (err, book) => {
        if (err) {
            res.send(err);
        }

        res.json(book);
    });
}

exports.getAllBooks = (res) => {
    book.find({}, (err, books) => {
        if (err) {
            res.send(err);
        }

        res.json(books);
    });
}

exports.createBook = (saveBook, res) => {
    const newBook = new book(saveBook);

    newBook.save((err, book) => {
        if (err) {
            res.send(err);
        }

        res.json(book);
    });
}

exports.updateBook = (bookId, updateBook, res) => {
    book.findOneAndUpdate({
        _id: bookId
    }, updateBook,
        (err, book) => {
            if (err) {
                res.send(err);
            }

            res.json(book);
        });
}

exports.deleteBook = (bookId, res) => {
    book.remove({
        _id: bookId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `book ${bookId} successfully deleted`
        });
    });
}