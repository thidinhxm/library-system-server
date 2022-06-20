const BorrowCardModel = require("./borrowCardModel");

exports.getBorrowedHistory = async (readerID) => {
  const borrowCard = await BorrowCardModel.find({ readerID: readerID });
  return borrowCard;
}

exports.getAllBorrowCard = async () => {
  const borrowCards = await BorrowCardModel.find({});
  return borrowCards;
}

exports.getBorrowCardByID = async (borrowCardID) => {
  const borrowCard = await BorrowCardModel.findOne({ borrowCardID }).populate('bookBorrowed');
  return borrowCard;
}

exports.createBorrowCard = async (borrowCardObj) => {
  const borrowCards = await BorrowCardModel.find({});
  const borrowCardID = (borrowCards.length === 0) ? '1' : ((+borrowCards[borrowCards.length - 1].borrowCardID + 1) + '');

  borrowCardObj = {
    borrowCardID,
    ...borrowCardObj
  };
  const borrowCard = await BorrowCardModel.create(borrowCardObj);

  return borrowCard;
}

exports.updateBorrowCard = async (borrowCardID, borrowCardObj) => {
  borrowCardObj = {
    borrowCardID,
    ...borrowCardObj
  };
  const borrowCardUpdated = await BorrowCardModel.updateOne({ borrowCardID }, borrowCardObj);

  return borrowCardUpdated;
}

exports.deleteBorrowCard = async (borrowCardID) => {
  const borrowCardDeleted = await BorrowCardModel.deleteOne({ borrowCardID });
  return borrowCardDeleted;
}
