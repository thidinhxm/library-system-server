const borrowCardService = require('./borrowCardService');
const bookService = require('../book/bookService');

exports.getAllBorrowCard = async (req, res) => {
    try {
        const borrowCards = await borrowCardService.getAllBorrowCard();
        res.status(200).json(borrowCards);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getBorrowCardByID = async (req, res) => {
    try {
        const borrowCard = await borrowCardService.getBorrowCardByID(req.params.id);

        res.status(200).json(borrowCard);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.createBorrowCard = async (req, res) => {
    try {
        const borrowCard = await borrowCardService.createBorrowCard(req.body);
        borrowCard.bookBorrowed.forEach(async (_id, index) => {
            let book = await bookService.getBookByMongoID(_id);
            await bookService.updateBook(book.bookTitleID, book.no, 'borrowing');
        });

        res.status(201).json(borrowCard);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.updateBorrowCard = async (req, res) => {
    try {
        const borrowCardUpdated = await borrowCardService.updateBorrowCard(req.params.id, req.body);

        res.status(204).json(borrowCardUpdated);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.deleteBorrowCard = async (req, res) => {
    try {
        const borrowCardDeleted = await borrowCardService.deleteBorrowCard(req.params.id);

        res.status(204).json(borrowCardDeleted);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getBorrowedHistory = (req,res) =>{
  try {
    const readerID = req.params.id;
    const historyBorrow = borrowCardService.getBorrowedHistory(readerID);
    res.status(200).json({
      status: "success",
      data: historyBorrow,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
}

exports.getBorrowCard = async (req,res) =>{
  try {
    const borrowCardID = req.params.id;
    const historyBorrow = await borrowCardService.getBorrowCard(borrowCardID);
    res.status(200).json({
      status: "success",
      data: historyBorrow,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
}



exports.getTopBorrowedBook = async (req,res) =>{
  try {
    const year = req.params.year*1;
    const amount = req.query.amount;
    const topBorrowedBook = await borrowCardService.getTopBorrowedBook(year,amount);
    res.status(200).json({
      status: "success",
      result: topBorrowedBook.length,
      data: topBorrowedBook,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
}


// exports.createBorrowCard = async (req, res) => {
//   try {
//     const newBorrowCard = await borrowCardService.createBorrowCard(req.body);
//     res.status(201).json({
//       status: "succees",
//       data: newBorrowCard,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       status: "fail",
//       message: "Invalid data send",
//     });
//   }
// };

// exports.updateBorrowCard = async (req, res) => {
//   try {
//     const borrowCard = await borrowCardService.updateBorrowCard(req.params.id, req.body);
//     res.status(200).json({
//       status: "success",
//       data: {
//         borrowCard,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };
// exports.deleteBorrowCard = async (req, res) => {
//   try {
//     const borrowCard = await borrowCardService.deleteBorrowCard(req.params.id, req.body);
//     if (!borrowCard) {
//       return res.status(404).json({
//         status: "fail",
//         message: "Borrow Card not found",
//       });
//     }
//     res.status(200).json({
//       status: "success",
//       data: {
//         borrowCard,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };
