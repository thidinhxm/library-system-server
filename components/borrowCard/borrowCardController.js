const borrowCardService = require("./borrowCardService");

exports.getBorrowedHistory = (req,res) =>{
  try {
    const readerID = req.params.id;
    const historyBorrow = borrowCardService.getBorrowedHistory(readerID);
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
}

exports.getTop3BorrowedBook = async (req,res) =>{
  try {
    // const year = req.params.year*1;
    const top3BorrowedBook = await borrowCardService.getTop3BorrowedBook();
    res.status(200).json({
      status: "success",
      results: top3BorrowedBook.length,
      data: top3BorrowedBook,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
}