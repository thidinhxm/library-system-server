const ReturnCardModel = require("./returnCardModel");

exports.getReturnedHistory = async (borrowCardID) => {
  const borrowCard = await ReturnCardModel.find({ borrowCardID: borrowCardID });
  return borrowCard;
}

exports.getAllReturnCard = async () => {
  const returnCards = await ReturnCardModel.find({});
  return returnCards;
}

exports.getOneReturnCard = async (returnCardID) => {
  const returnCard = await ReturnCardModel.findOne({ returnCardID });
  return returnCard;
}

exports.createReturnCard = async (body) => {
  const returnCardProps = body;
  const returnCards = await ReturnCardModel.find({});
  const returnCardID = (+returnCards[returnCards.length - 1].returnCardID + 1) + '';

  const data = {
    returnCardID,
    ...returnCardProps
  };
  const returnCard = await ReturnCardModel.create(data);

  return returnCard;
}

exports.updateReturnCard = async (returnCardID, body) => {
  const returnCardProps = body;
  const data = {
    returnCardID,
    ...returnCardProps
  }
  const returnCardUpdated = await ReturnCardModel.updateOne({ returnCardID }, data);

  return returnCardUpdated;
}

exports.deleteReturnCard = async (returnCardID) => {
  const returnCardDeleted = await ReturnCardModel.deleteOne({ returnCardID });
  return returnCardDeleted;
}
