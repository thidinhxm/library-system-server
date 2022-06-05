const mongoose = require('mongoose');

const schema = mongoose.Schema({
  librarianId: {
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
  dob: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Librarian', schema);
