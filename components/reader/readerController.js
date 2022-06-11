const res = require("express/lib/response");

const readerService = require("./readerService");
const borrowCardService = require("../borrowCard/borrowCardService");
const returnCardService = require("../returnCard/returnCardService");

exports.getBorrowedHistory = async (req, res) => {
  try {
    const readerID = req.params.id;
    const historyBorrow = await borrowCardService.getBorrowedHistory(readerID);
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
exports.getReturnedHistory = async (req, res) => {
  try {
    const borrowCardID = req.params.id;
    const historyReturn = await returnCardService.getReturnedHistory(borrowCardID);
    res.status(200).json({
      status: "success",
      results: historyReturn.length,
      data: historyReturn,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllReader = async (req, res) => {
  try {
    const readers = await readerService.getAllReader(req.query);

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
    const newTour = await readerService.createReader(req.body);
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
    const reader = await readerService.updateReader(req.params.id, req.body);
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
    const reader = await readerService.deleteReader(req.params.id, req.body);
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
