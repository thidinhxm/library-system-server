const bookTitleService = require('./bookTitleService');

exports.getAllBookTitle = async (req, res) => {
    try {
        const bookTitles = await bookTitleService.getAllBookTitle();

        res.status(200).json(bookTitles);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getOneBookTitle = async (req, res) => {
    try {
        const bookTitle = await bookTitleService.getOneBookTitle(req.params.id);

        res.status(200).json(bookTitle);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.createBookTitle = async (req, res) => {
    try {
        const bookTitle = await bookTitleService.createBookTitle(req.body);

        res.status(201).json(bookTitle);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.updateBookTitle = async (req, res) => {
    try {
        const bookTitleUpdated = await bookTitleService.updateBookTitle(req.params.id, req.body);

        res.status(204).json(bookTitleUpdated);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.deleteBookTitle = async (req, res) => {
    try {
        const bookTitleDeleted = await bookTitleService.deleteBookTitle(req.params.id);

        res.status(204).json(bookTitleDeleted);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}