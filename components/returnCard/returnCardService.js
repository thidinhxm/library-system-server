const ReturnCardModel = require("./returnCardModel");

exports.getReturnedHistory = async (borrowCardID) => {
  const borrowCard = await ReturnCardModel.find({ borrowCardID: borrowCardID });
  return borrowCard;
}

exports.getAllReturnCard = async () => {
  const returnCards = await ReturnCardModel.find({});
  return returnCards;
}

exports.getReturnCardByID = async (returnCardID) => {
  const returnCard = await ReturnCardModel.findOne({ returnCardID });
  return returnCard;
}

exports.createReturnCard = async (returnCardObj) => {
  const returnCards = await ReturnCardModel.find({});
  const returnCardID = (returnCards.length === 0) ? '1' : ((+returnCards[returnCards.length - 1].returnCardID + 1) + '');

  returnCardObj = {
    returnCardID,
    ...returnCardObj
  };
  const returnCard = await ReturnCardModel.create(returnCardObj);

  return returnCard;
}

exports.updateReturnCard = async (returnCardID, returnCardObj) => {
  returnCardObj = {
    returnCardID,
    ...returnCardObj
  }
  const returnCardUpdated = await ReturnCardModel.updateOne({ returnCardID }, returnCardObj);

  return returnCardUpdated;
}

exports.deleteReturnCard = async (returnCardID) => {
  const returnCardDeleted = await ReturnCardModel.deleteOne({ returnCardID });
  return returnCardDeleted;
}
