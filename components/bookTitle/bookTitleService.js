const BookTitleModel = require('./bookTitleModel');
const CategoryModel = require('../category/categoryModel');
exports.getAllBookTitle = async () => {
    const bookTitles = await BookTitleModel.find({});
    const books = await Promise.all(bookTitles.map(async (bookTitle) => {
        const category = await CategoryModel.findOne({ categoryID: bookTitle.categoryID });
        bookTitle.category = category;
        return {
            ...bookTitle._doc,
            category: category.categoryName
        };
    }));
    return books;
}

exports.getBookTitleByID = async (bookTitleID) => {
    const bookTitle = await BookTitleModel.findOne({ bookTitleID });
    const category = await CategoryModel.findOne({ categoryID: bookTitle.categoryID });
    return {
        ...bookTitle._doc,
        category: category.categoryName
    }
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
