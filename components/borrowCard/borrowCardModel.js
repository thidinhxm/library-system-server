const mongoose = require('mongoose');
const Book = require('../book/BookModel');
const schema = mongoose.Schema({
  borrowCardId: {
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
  librarianId: {
    type: String,
    required: true,
  },
  readerId: {
    type: String,
    required: true,
  },
  bookBorrowed: [ Book ]
});

module.exports = mongoose.model('BorrowCard', schema);