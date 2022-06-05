const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  bookTitleId: {
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
  categoryId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model('BookTitle', schema);