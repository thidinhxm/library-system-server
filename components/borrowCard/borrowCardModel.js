const mongoose = require('mongoose');

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
  bookBorrowed: [ { type: mongoose.Schema.ObjectId, ref: 'Book' } ],
}, {
  collection: "borrowCard"
});

module.exports = mongoose.model('BorrowCard', schema);