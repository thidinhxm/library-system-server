const Librarian = require("./librarianModel");
const APIFeatures = require('../utils/apiFeatures');
const crypto = require('crypto');

exports.getAllLibrarian = async (query) => {
  const feature = new APIFeatures(Librarian.find(), query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  //  const readers = await feature.query;
  const readers = await feature.query;
  return readers;
}

exports.createLibrarian = async (body) => {
  const data ={
    ...body,
    token: crypto.randomBytes(64).toString('hex')
  }
  const reader = new Librarian(data);
  const newReader = await reader.save();
  return newReader;
}

exports.updateLibrarian= async (id, body) => {
  const reader = await Librarian.findOneAndUpdate({ librarianID: id }, body, { new: true, runValidators: true, });
  return reader;

}
exports.deleteLibrarian = async (id, body) => {
  const reader = await Librarian.findOneAndDelete({ librarianID: id }, body);
  return reader;
}

exports.getLibrarianByEmail = async (email) => {
  const reader = await Librarian.findOne({ username: email });
  return reader;
}
