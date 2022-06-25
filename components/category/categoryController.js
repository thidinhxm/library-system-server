const categoryService = require('./categoryService');

exports.getAllCategory = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategory();

        res.status(200).json(categories);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getCategoryByID = async (req, res) => {
    try {
        const category = await categoryService.getCategoryByID(req.params.id);

        res.status(200).json(category);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);

        res.status(201).json(category);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const categoryUpdated = await categoryService.updateCategory(req.params.id, req.body);

        res.status(204).json(categoryUpdated);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const categoryDeleted = await categoryService.deleteCategory(req.params.id);

        res.status(204).json(categoryDeleted);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}
