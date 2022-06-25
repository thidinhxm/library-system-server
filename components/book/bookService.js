const BookModel = require('./bookModel');

exports.getAllBook = async () => {
    const books = await BookModel.find({});
    return books;
}

exports.getBookByIDNo = async (bookTitleID, no) => {
    const book = await BookModel.findOne({ bookTitleID, no });
    return book;
}

exports.getBookByMongoID = async (_id) => {
    const book = await BookModel.findOne({ _id });
    return book;
}

exports.createBook = async (bookObj) => {
    const { bookTitleID } = bookObj;
    const books = await BookModel.find({ bookTitleID });
    const no = (books.length === 0) ? '1' : ((+books[books.length - 1].no + 1) + '');

    bookObj = {
        bookTitleID,
        no,
        status: 'available'
    };
    const book = await BookModel.create(bookObj);

    return book;
}

exports.updateBook = async (bookTitleID, no, bookObj) => {
    bookObj = {
        bookTitleID,
        no,
        ...bookObj
    };
    const bookUpdated = await BookModel.updateOne({ bookTitleID, no }, bookObj);

    return bookUpdated;
}

exports.deleteBook = async (bookTitleID, no) => {
    const bookDeleted = await BookModel.deleteOne({ bookTitleID, no });
    return bookDeleted;
}
