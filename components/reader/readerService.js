const Reader = require("./readerModel")
const APIFeatures = require('../utils/apiFeatures');

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
  const reader = new Reader(body);
  const newReader = await reader.save();
  return newReader;
}

exports.updateReader = async (id, body) => {
  const reader = await Reader.findOneAndUpdate({ readerID: id }, body, { new: true });
  console.log(reader);
  return reader;

}