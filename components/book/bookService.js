const BookModel = require('./bookModel');

exports.getAllBook = async () => {
    const books = await BookModel.find({});
    return books;
}

exports.getOneBook = async (bookTitleID, no) => {
    const book = await BookModel.find({ bookTitleID, no });
    return book;
}

exports.createBook = async (bookTitleID) => {
    const books = await BookModel.find({ bookTitleID });
    const no = (+books[books.length - 1].no + 1) + '';

    const data = {
        bookTitleID,
        no,
        status: 'available'
    };
    const book = await BookModel.create(data);

    return book;
}

exports.updateBook = async (bookTitleID, no) => {
    const { status } = req.body;
    const data = {
        bookTitleID,
        no,
        status
    };
    const bookUpdated = await BookModel.updateOne({ bookTitleID, no }, data);

    return bookUpdated;
}

exports.deleteBook = async (bookTitleID, no) => {
    const bookDeleted = await BookModel.deleteOne({ bookTitleID, no });
    return bookDeleted;
}