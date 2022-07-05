const returnCardService = require('./returnCardService');
const borrowCardService = require('../borrowCard/borrowCardService');
const bookService = require('../book/bookService');

exports.getAllReturnCard = async (req, res) => {
    try {
        const returnCards = await returnCardService.getAllReturnCard();
        res.status(200).json(returnCards);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getReturnCardByID = async (req, res) => {
    try {
        const returnCard = await returnCardService.getReturnCardByID(req.params.id);
        res.status(200).json(returnCard);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.createReturnCard = async (req, res) => {
    try {
        const returnCard = await returnCardService.createReturnCard(req.body);
        const borrowCard = await borrowCardService.getBorrowCardByID(returnCard.borrowCardID);
        borrowCard.bookBorrowed.forEach(async (_id, index) => {
            let book = await bookService.getBookByMongoID(_id);
            await bookService.updateBook(book.bookTitleID, book.no, 'available');
        });
        res.status(201).json(returnCard);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.updateReturnCard = async (req, res) => {
    try {
        const returnCardUpdated = await returnCardService.updateReturnCard(req.params.id, req.body);

        res.status(204).json(returnCardUpdated);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.deleteReturnCard = async (req, res) => {
    try {
        const returnCardDeleted = await returnCardService.deleteReturnCard(req.params.id);
        res.status(204).json(returnCardDeleted);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}
