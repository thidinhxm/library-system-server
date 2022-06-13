const BorrowCard = require("./borrowCardModel")

exports.getBorrowedHistory = async (readerID) => {
  // const borrowCard = await BorrowCard.find({ readerID: readerID });
  const borrowCard = await BorrowCard.aggregate([
    { $match: { readerID: readerID } },
    { $unwind: "$bookBorrowed" },

    { $set: { bookBorrowed: { $toObjectId: "$bookBorrowed" } } },
    {
      $lookup: {
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
      $lookup: {
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
        _id: 1,
        borrowCardID: "$borrowCardID",
        createDate: 1,
        expiredDate: "$expiredDate",
        librarianID: "$librarianID",
        bookName: "$bookTitle_borrowed.bookName",
      }
    },
    {
      $group: {
        _id: "$borrowCardID",
        borrowCardID: { $first: "$borrowCardID" },
        createDate: { $first: "$createDate" },
        expiredDate: { $first: "$expiredDate" },
        librarianID: { $first: "$librarianID" },
        bookName: { $push: "$bookName" },
      }
    }
  ]);
  return borrowCard;
}
// exports.getBorrowedHistory = async (readerID) => {
//   // const borrowCard = await BorrowCard.find({ readerID: readerID });
//   const borrowCard = await BorrowCard.aggregate([
//     { $unwind: "$bookBorrowed" },
//     { $match: { readerID: readerID } },
//     {
//       $group: {
//         _id: "$bookBorrowed",
//         createDate: { $first: "$createDate" },
//         expiredDate: { $first: "$expiredDate" },
//         librarianID: { $first: "$librarianID" },
//       }
//     },
//     { $set: { bookBorrowed: { $toObjectId: "$_id" } } },
//     { 
//       $lookup: {
//         from: "book",
//         localField: "bookBorrowed",
//         foreignField: "_id",
//         as: "bookTitle_borrowed",
//       },

//     },
//     {
//       $unwind: "$bookTitle_borrowed",
//     },
//     {
//       $lookup: {
//         from: "bookTitle",
//         localField: "bookTitle_borrowed.bookTitleID",
//         foreignField: "bookTitleID",
//         as: "bookTitle_borrowed",
//       },
//     },
//     {
//       $unwind: "$bookTitle_borrowed",
//     },

//     {
//       $project: {
//         _id: 1,
//         borrowCardID: "$_id",
//         createDate: 1,
//         expiredDate: "$expiredDate",
//         librarianID: "$librarianID",
//         bookName: "$bookTitle_borrowed.bookName",
//       }
//     },
//     {
//       $group:{
//         _id: "$borrowCardID",
//         createDate: { $first: "$createDate" },
//         expiredDate: { $first: "$expiredDate" },
//         librarianID: { $first: "$librarianID" },
//         bookName: { $push: "$bookName" },
//       }
//     }


//   ]);
//   return borrowCard;
// }


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
    { $set: { bookBorrowed: { $toObjectId: "$_id" } } },
    {
      $lookup: {
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
      $lookup: {
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

//commit cho vui