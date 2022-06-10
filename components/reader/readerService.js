const Reader = require("./readerModel")
const APIFeatures = require('../utils/apiFeatures');

exports.getAllReader = async (query) => {
  const feature = new APIFeatures(Reader.find(),query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  //  const readers = await feature.query;
   const readers = await feature.query;
  return readers;
}