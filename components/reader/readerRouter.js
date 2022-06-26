const { Router } = require("express");
const authMiddleware = require("../auth/authMiddleware");
const readerController = require("./readerController");

const router = Router();

router
  .route("/")
  .get(authMiddleware.isLibrarian, readerController.getAllReader)
  .post(authMiddleware.isLibrarian, readerController.createReader)

router
  .route("/:id")
  .patch(authMiddleware.isLibrarian, readerController.updateReader)
  .delete(authMiddleware.isLibrarian, readerController.deleteReader);

router
  .route("/:id/borrow-history")
  .get(readerController.getBorrowedHistory);
  
router
  .route("/:id/return-history")
  .get(readerController.getReturnedHistory);

module.exports = router;
