const bookService = require('./bookService');

exports.getAllBook = async (req, res) => {
    try {
        const books = await bookService.getAllBook();

        res.status(200).json(books);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getBookByIDNo = async (req, res) => {
    try {
        const book = await bookService.getBookByIDNo(req.params.id, req.params.no);

        res.status(200).json(book);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getBookByMongoID = async (req, res) => {
    try {
        const book = await bookService.getBookByMongoID(req.params.id);

        res.status(200).json(book);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req.body);

        res.status(201).json(book);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.updateBook = async (req, res) => {
    try {
        const bookUpdated = await bookService.updateBook(req.params.id, req.params.no, req.body);

        res.status(204).json(bookUpdated);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const bookDeleted = await bookService.deleteBook(req.params.id, req.params.no);

        res.status(204).json(bookDeleted);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}
