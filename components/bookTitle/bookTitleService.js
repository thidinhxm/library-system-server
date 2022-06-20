const BookTitleModel = require('./bookTitleModel');

exports.getAllBookTitle = async () => {
    const bookTitles = await BookTitleModel.find({});
    return bookTitles;
}

exports.getBookTitleByID = async (bookTitleID) => {
    const bookTitle = await BookTitleModel.findOne({ bookTitleID });
    return bookTitle;
}

exports.createBookTitle = async (bookTitleObj) => {
    const bookTitles = await BookTitleModel.find({});
    const bookTitleID = (bookTitles.length === 0) ? '1' : ((+bookTitles[bookTitles.length - 1].bookTitleID + 1) + '');

    bookTitleObj = {
        bookTitleID,
        ...bookTitleObj
    }
    const bookTitle = await BookTitleModel.create(bookTitleObj);

    return bookTitle;
}

exports.updateBookTitle = async (bookTitleID, bookTitleObj) => {
    bookTitleObj = {
        bookTitleID,
        ...bookTitleObj
    }
    const bookTitleUpdated = await BookTitleModel.updateOne({ bookTitleID }, bookTitleObj);

    return bookTitleUpdated;
}

exports.deleteBookTitle = async (bookTitleID) => {
    const bookTitleDeleted = await BookTitleModel.deleteOne({ bookTitleID });
    return bookTitleDeleted;
}
