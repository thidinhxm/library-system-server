const mongoose = require('mongoose');

const schema = mongoose.Schema({
  returnCardID: {
    type: String,
    required: true,
    unique: true,
  },
  borrowCardID: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
  librarianID: {
    type: String,
    required: true,
  },
}, {
  collection: "returnCard"
});

module.exports = mongoose.model('ReturnCard', schema);