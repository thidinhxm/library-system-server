const { Router } = require('express');
const BookModel = require('./bookModel');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const books = await BookModel.find({});

    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id/:no', async (req, res) => {
  try {
    const bookTitleID = req.params.id;
    const no = req.params.no;
    const book = await BookModel.find({ bookTitleID, no });

    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { bookTitleID } = req.body;
    const books = await BookModel.find({ bookTitleID });
    const no = (+books[books.length - 1].no + 1) + '';

    const data = {
      bookTitleID,
      no,
      status: 'available'
    };
    const book = await BookModel.create(data);

    res.status(201).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id/:no', async (req, res) => {
  try {
    const bookTitleID = req.params.id;
    const no = req.params.no;
    const { status } = req.body;
    const data = {
      bookTitleID,
      no,
      status
    };
    const bookUpdated = await BookModel.updateOne({ bookTitleID, no }, data);

    res.status(204).json(bookUpdated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id/:no', async (req, res) => {
  try {
    const bookDeleted = await BookModel.deleteOne({ bookTitleID: req.params.id, no: req.params.no });

    res.status(204).json(bookDeleted);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
})

module.exports = router;