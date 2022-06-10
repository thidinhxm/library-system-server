const { getAllReader, getHistoryBorrow } = require("../reader/readerService")
const BorrowCard = require("./borrowCardModel")

exports.getHistoryBorrow = async (readerID) => {
  const borrowCard = await BorrowCard.find({ readerID: readerID });
  return borrowCard;
}