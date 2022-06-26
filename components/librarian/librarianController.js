const res = require("express/lib/response");

const librarianService = require("./librarianService");


exports.getAllLibrarian = async (req, res) => {
  try {
    const readers = await librarianService.getAllLibrarian(req.query);
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

exports.createLibrarian = async (req, res) => {
  try {
    const newTour = await librarianService.createLibrarian(req.body);
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

exports.updateLibrarian = async (req, res) => {
  try {
    const reader = await librarianService.updateLibrarian(req.params.id, req.body);
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
exports.deleteLibrarian = async (req, res) => {
  try {
    const reader = await librarianService.deleteLibrarian(req.params.id, req.body);
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
