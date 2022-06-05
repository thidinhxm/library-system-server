const mongoose = require('mongoose');

const schema = mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
    unique: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Category', schema);