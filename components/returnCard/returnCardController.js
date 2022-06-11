const returnCardService = require('./returnCardService');

exports.getAllReturnCard = async (req, res) => {
    try {
        const returnCards = await returnCardService.getAllReturnCard();

        res.status(200).json(returnCards);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getOneReturnCard = async (req, res) => {
    try {
        const returnCard = await returnCardService.getOneReturnCard(req.params.id);

        res.status(200).json(returnCard);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.createReturnCard = async (req, res) => {
    try {
        const returnCard = await returnCardService.createReturnCard(req.body);

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
