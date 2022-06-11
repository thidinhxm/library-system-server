const mongoose = require('mongoose');

const schema = mongoose.Schema({
  categoryID: {
    type: String,
    required: true,
    unique: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
}, {
  collection: "category"
});

module.exports = mongoose.model('Category', schema);