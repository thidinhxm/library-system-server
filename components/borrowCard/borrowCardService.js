const BorrowCard = require("./borrowCardModel")

exports.getBorrowedHistory = async (readerID) => {
  const borrowCard = await BorrowCard.find({ readerID: readerID });
  return borrowCard;
}

exports.getTop3BorrowedBook = async () => {
  const popularBook = await BorrowCard.aggregate([
    {
      $unwind: "$bookBorrowed",
    },
    {
      $group: {
        _id: "$bookBorrowed",
        borrowedAmount: { $sum: 1 }, 
      }
    },
    {
      $sort: { borrowedAmount: -1 }
    },
    {
      $limit: 3
    },
    {$set: {bookBorrowed: {$toObjectId: "$_id"} }}, 
    {
      $lookup:{
        from: "book",
        localField: "bookBorrowed",
        foreignField: "_id",
        as: "bookTitle_borrowed",
      },
      
    },
    {
      $unwind: "$bookTitle_borrowed",
    },
    {
      $lookup:{
        from: "bookTitle",
        localField: "bookTitle_borrowed.bookTitleID",
        foreignField: "bookTitleID",
        as: "bookTitle_borrowed",
      },
    },
    {
      $unwind: "$bookTitle_borrowed",
    },
    {
      $project: {
        _id: 0,
        bookName: "$bookTitle_borrowed.bookName",
        borrowedAmount: 1,
        bookImgage: "$bookTitle_borrowed.imageURL",
    }
  }
  ]);
  return popularBook;
}