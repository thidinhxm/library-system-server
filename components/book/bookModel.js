const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
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
    default: 'available',
  }
}, {
  collection: "book"
}
);

module.exports = mongoose.model("Book", bookSchema);
