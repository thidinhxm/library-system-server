const mongoose = require('mongoose');

const schema = mongoose.Schema({
  bookTitleId: {
    type: String,
    required: true,
  },
  No: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Book', schema);