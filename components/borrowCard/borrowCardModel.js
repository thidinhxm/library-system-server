const mongoose = require('mongoose');
const Book = require('../book/BookModel');
const schema = mongoose.Schema({
  borrowCardID: {
    type: String,
    required: true,
    unique: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
  expiredDate: {
    type: Date,
    required: true,
  },
  librarianID: {
    type: String,
    required: true,
  },
  readerID: {
    type: String,
    required: true,
  },
  // bookBorrowed: [ Book ],
});

const BorrowCard=  mongoose.model('BorrowCard', new mongoose.Schema(schema, { collection: 'borrowCard' }));
module.exports = BorrowCard;