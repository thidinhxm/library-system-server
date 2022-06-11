const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  bookTitleID: {
    type: String,
    required: true,
    unique: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  categoryID: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  }
}, {
  collection: 'bookTitle'
});

module.exports = mongoose.model('BookTitle', schema);