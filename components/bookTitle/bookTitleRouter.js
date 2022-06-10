const { Router } = require('express');
const BookTitleModel = require('./bookTitleModel');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const bookTitles = await BookTitleModel.find({});

    res.status(200).json(bookTitles);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const bookTitleID = req.params.id;
    const bookTitle = await BookTitleModel.find({ bookTitleID });

    res.status(200).json(bookTitle);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const bookTitleProps = req.body;
    const bookTitles = await BookTitleModel.find({});
    const bookTitleID = (+bookTitles[bookTitles.length - 1].bookTitleID + 1) + '';

    const data = {
      bookTitleID,
      ...bookTitleProps
    }
    const bookTitle = await BookTitleModel.create(data);

    res.status(201).json(bookTitle);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const bookTitleID = req.params.id;
    const bookTitleProps = req.body;
    const data = {
      bookTitleID,
      ...bookTitleProps
    }
    const bookTitleUpdated = await BookTitleModel.updateOne({ bookTitleID }, data);

    res.status(204).json(bookTitleUpdated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const bookTitleDeleted = await BookTitleModel.deleteOne({ bookTitleID: req.params.id });

    res.status(204).json(bookTitleDeleted);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
})

module.exports = router;