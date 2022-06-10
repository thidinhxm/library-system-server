const { Router } = require('express');
const CategoryModel = require('./categoryModel');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const categories = await CategoryModel.find({});

    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryID = req.params.id;
    const category = await CategoryModel.findOne({ categoryID });

    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { categoryName } = req.body;
    const categories = await CategoryModel.find({});
    const categoryID = (+categories[categories.length - 1].categoryID + 1) + '';

    const data = {
      categoryID,
      categoryName
    };
    const category = await CategoryModel.create(data);

    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryID = req.params.id;
    const { categoryName } = req.body;
    const data = {
      categoryID,
      categoryName
    }
    const categoryUpdated = await CategoryModel.updateOne({ categoryID }, data);

    res.status(204).json(categoryUpdated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryDeleted = await CategoryModel.deleteOne({ categoryID: req.params.id });

    res.status(204).json(categoryDeleted);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;