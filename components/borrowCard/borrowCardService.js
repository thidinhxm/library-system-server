const BorrowCard = require("./borrowCardModel")

exports.getBorrowedHistory = async (readerID) => {
  const borrowCard = await BorrowCard.find({ readerID: readerID });
  return borrowCard;
}