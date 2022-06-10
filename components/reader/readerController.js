const res = require("express/lib/response");

const readerSerice = require("./readerService");
const borrowCardService = require("../borrowCard/borrowCardService");

exports.getHistoryBorrow = async (req, res) => {
  try {
    const readerID = req.params.id;
    const historyBorrow = await borrowCardService.getHistoryBorrow(readerID);
    res.status(200).json({
      status: "success",
      results: historyBorrow.length,
      data: historyBorrow,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getHistoryReturn = (req, res) => {
  const id = req.params.id;
  // const historyBorrow = await readerService.getHistoryBorrow(id);
  res.send("getHistoryReturn");
};

exports.getAllReader = async (req, res) => {
  try {
    const readers = await readerSerice.getAllReader(req.query);

    res.status(200).json({
      status: "success",
      results: readers.length,
      data: readers,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createReader = async (req, res) => {
  try {
    const newTour = await readerSerice.createReader(req.body);
    res.status(201).json({
      status: "succees",
      data: newTour,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data send",
    });
  }
};
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    // const tour = await Tour.findOne({name : req.params.id})
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateReader = async (req, res) => {
  try {
    const reader = await readerSerice.updateReader(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        reader,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteReader = async (req, res) => {
  try {
    const reader = await readerSerice.deleteReader(req.params.id, req.body);
    if (!reader) {
      return res.status(404).json({
        status: "fail",
        message: "Reader not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        reader,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
