const mongoose = require('mongoose');

const schema = mongoose.Schema({
  readerID: {
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
  DOB: {
    type: Date,
    required: true,
  },
}, {
  collection: "reader"
});

module.exports = mongoose.model('Reader', schema);