const mongoose = require('mongoose');

const schema = mongoose.Schema({
  bookTitleID: {
    type: String,
    required: true,
  },
  no: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Book', schema);