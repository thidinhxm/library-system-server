const { Router } = require('express');
const categoryController = require('./categoryController');

const router = Router();

router
  .route('/')
  .get(categoryController.getAllCategory)
  .post(categoryController.createCategory);

router
  .route('/:id')
  .get(categoryController.getCategoryByID)
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
