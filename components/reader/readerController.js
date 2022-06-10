const res = require("express/lib/response");

const readerSerice = require("./readerService");


exports.getHistoryBorrow =  (req, res) => {
  const readerID = req.params.readerID;
  console.log("readerID: "+readerID);
  // const historyBorrow = await readerService.getHistoryBorrow(readerID);
  res.send("historyBorrow");
}
exports.getHistoryReturn =  (req, res) => {
  const readerID = req.params.readerID;
  // const historyBorrow = await readerService.getHistoryBorrow(readerID);
  res.send("getHistoryReturn");
}


exports.getAllReader = async (req, res) => {
  try {
    const readers = await readerSerice.getAllReader(req.query);

    res.status(200).json({
      status: 'success',
      results: readers.length,
      data: readers,
    });
  } catch (err) {
    console.log(err)
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'succees',
      data: newTour,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data send',
    });
  }
};
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    // const tour = await Tour.findOne({name : req.params.id})
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
