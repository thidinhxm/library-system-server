const borrowCardService = require("./borrowCardService");

exports.getBorrowedHistory = (req,res) =>{
  try {
    const readerID = req.params.id;
    const historyBorrow = borrowCardService.getBorrowedHistory(readerID);
    res.status(200).json({
      status: "success",
      data: historyBorrow,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
}

exports.getTopBorrowedBook = async (req,res) =>{
  try {
    const year = req.params.year*1;
    const amount = req.query.amount*1;
    const topBorrowedBook = await borrowCardService.getTopBorrowedBook(year,amount);
    res.status(200).json({
      status: "success",
      result: topBorrowedBook.length,
      data: topBorrowedBook,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
}