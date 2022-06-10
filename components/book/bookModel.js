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
  },
});

const Book = mongoose.model(
  "Book",
  new mongoose.Schema(bookSchema, { collection: "book" })
);

module.exports = { Book, bookSchema };
