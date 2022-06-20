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
