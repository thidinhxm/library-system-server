const ReturnCard = require("./returnCardModel");

exports.getReturnedHistory = async (borrowCardID) => {
  const borrowCard = await ReturnCard.find({ borrowCardID: borrowCardID });
  return borrowCard;
}