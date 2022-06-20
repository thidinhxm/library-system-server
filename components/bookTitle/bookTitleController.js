const bookTitleService = require('./bookTitleService');
const bookService = require('../book/bookService');

exports.getAllBookTitle = async (req, res) => {
    try {
        const bookTitles = await bookTitleService.getAllBookTitle();

        res.status(200).json(bookTitles);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getBookTitleByID = async (req, res) => {
    try {
        const bookTitle = await bookTitleService.getBookTitleByID(req.params.id);

        res.status(200).json(bookTitle);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.createBookTitle = async (req, res) => {
    try {
        const bookTitle = await bookTitleService.createBookTitle(req.body);
        const bookObj = {
            bookTitleID: bookTitle.bookTitleID
        };
        for (let i = 0; i < bookTitle.quantity; ++i) {
            let book = await bookService.createBook(bookObj);
        }

        res.status(201).json(bookTitle);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.updateBookTitle = async (req, res) => {
    try {
        const bookTitle = await bookTitleService.getBookTitleByID(req.params.id);
        const bookTitleUpdated = await bookTitleService.updateBookTitle(req.params.id, req.body);
        const bookObj = {
            bookTitleID: bookTitle.bookTitleID
        };
        for (let i = bookTitle.quantity; i < req.body.quantity; ++i) {
            let book = await bookService.createBook(bookObj);
        }

        res.status(204).json(bookTitleUpdated);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.deleteBookTitle = async (req, res) => {
    try {
        const bookTitleDeleted = await bookTitleService.deleteBookTitle(req.params.id);

        res.status(204).json(bookTitleDeleted);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}