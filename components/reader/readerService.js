const Reader = require("./readerModel")
const APIFeatures = require('../utils/apiFeatures');
const crypto = require('crypto');

exports.getAllReader = async (query) => {
  const feature = new APIFeatures(Reader.find(), query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  //  const readers = await feature.query;
  const readers = await feature.query;
  return readers;
}

exports.createReader = async (body) => {
  const data ={
    ...body,
    token: crypto.randomBytes(64).toString('hex')
  }
  const reader = new Reader(data);
  const newReader = await reader.save();
  return newReader;
}

exports.updateReader = async (id, body) => {
  const reader = await Reader.findOneAndUpdate({ readerID: id }, body, { new: true, runValidators: true, });
  return reader;

}
exports.deleteReader = async (id, body) => {
  const reader = await Reader.findOneAndDelete({ readerID: id }, body);
  return reader;
}

exports.getReaderByEmail = async (email) => {
  const reader = await Reader.findOne({ username: email });
  return reader;
}

