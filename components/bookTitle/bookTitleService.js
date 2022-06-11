const BookTitleModel = require('./bookTitleModel');

exports.getAllBookTitle = async () => {
    const bookTitles = await BookTitleModel.find({});
    return bookTitles;
}

exports.getOneBookTitle = async (bookTitleID) => {
    const bookTitle = await BookTitleModel.find({ bookTitleID });
    return bookTitle;
}

exports.createBookTitle = async (body) => {
    const bookTitleProps = body;
    const bookTitles = await BookTitleModel.find({});
    const bookTitleID = (+bookTitles[bookTitles.length - 1].bookTitleID + 1) + '';

    const data = {
        bookTitleID,
        ...bookTitleProps
    }
    const bookTitle = await BookTitleModel.create(data);

    return bookTitle;;
}

exports.updateBookTitle = async (bookTitleID, body) => {
    const bookTitleProps = body;
    const data = {
        bookTitleID,
        ...bookTitleProps
    }
    const bookTitleUpdated = await BookTitleModel.updateOne({ bookTitleID }, data);

    return bookTitleUpdated;
}

exports.deleteBookTitle = async (categoryID) => {
    const bookTitleDeleted = await BookTitleModel.deleteOne({ categoryID });
    return bookTitleDeleted;
}