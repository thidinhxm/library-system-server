const BorrowCard = require("./borrowCardModel")

exports.getBorrowedHistory = async (readerID) => {

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

// exports.getTopBorrowedBook = async (year,amount=3) => {
//   const popularBook = await BorrowCard.aggregate([
//     {
//       $match:{
//         createDate: {
//           $gte: new Date(`${year}-01-01`),
//           $lte: new Date(`${year}-12-31`),
//       },
//     },
//     },
//     {
//       $unwind: "$bookBorrowed",
//     },
//     {
//       $group: {
//         _id: "$bookBorrowed",
//         borrowedAmount: { $sum: 1 },
//       }
//     },
//     {
//       $sort: { borrowedAmount: -1 }
//     },
//     {
//       $limit: amount
//     },
//     { $set: { bookBorrowed: { $toObjectId: "$bookBorrowed" } } },
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
//         _id: 0,
//         bookName: "$bookTitle_borrowed.bookName",
//         borrowedAmount: 1,
//         bookImgage: "$bookTitle_borrowed.imageURL",
//       }
//     }
//   ]);
//   return popularBook;
// }

exports.getTopBorrowedBook = async (year, amount = 3) => {
  const popularBook = await BorrowCard.aggregate([
    {
      $match: {
        createDate: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $unwind: "$bookBorrowed",
    },

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
      $group: {
        _id: "$bookTitle_borrowed.bookTitleID",
        bookTitleID: { $first: "$bookTitle_borrowed.bookTitleID" },
        bookName: { $first: "$bookTitle_borrowed.bookName" },
        bookImgage: { $first: "$bookTitle_borrowed.imageURL" },
        borrowedAmount: { $sum: 1 },
      }
    },
    {
      $sort: { borrowedAmount: -1 }
    }

  ]);
  return popularBook;
}

exports.getBorrowCard = async (borrowCardID) => {

  const borrowCard = await BorrowCard.aggregate([
    { $match: { borrowCardID: borrowCardID } },
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

exports.createBorrowCard = async (body) => {
  const borrowCard = new BorrowCard(body);
  const newborrowCard = await borrowCard.save();
  return newborrowCard;
}

exports.updateBorrowCard = async (id, body) => {
  const borrowCard = await BorrowCard.findOneAndUpdate({ borrowCardID: id }, body, { new: true, runValidators: true, });
  return borrowCard;

}
exports.deleteBorrowCard = async (id, body) => {
  const borrowCard = await BorrowCard.findOneAndDelete({ borrowCardID: id }, body);
  return borrowCard;
}
