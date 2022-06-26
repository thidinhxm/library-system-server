const { Router } = require('express');
const authMiddleware = require('../auth/authMiddleware');
const categoryController = require('./categoryController');

const router = Router();

router
  .route('/')
  .get(categoryController.getAllCategory)
  .post(authMiddleware.isLibrarian, categoryController.createCategory);

router
  .route('/:id')
  .get(categoryController.getCategoryByID)
  .put(authMiddleware.isLibrarian, categoryController.updateCategory)
  .delete(authMiddleware.isLibrarian, categoryController.deleteCategory);

module.exports = router;
