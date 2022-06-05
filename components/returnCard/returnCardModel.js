const mongoose = require('mongoose');

const schema = mongoose.Schema({
  returnCardId: {
    type: String,
    required: true,
    unique: true,
  },
  borrowCardId: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
  librarianId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ReturnCard', schema);