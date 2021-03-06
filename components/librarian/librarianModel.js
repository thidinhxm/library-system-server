const mongoose = require('mongoose');

const schema = mongoose.Schema({
  librarianID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,

  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  token: {
    type: String,
  },
  isValidated: { 
    type: Boolean,
    default: false,
  }
}, {
  collection: 'librarian'
});

module.exports = mongoose.model('Librarian', schema);
