const { Router } = require("express");
const router = Router();

const readerController = require("./readerController");

router
  .route("/")
  .get(readerController.getAllReader)
  .post(readerController.createReader)

router
  .route("/:id")
  .patch(readerController.updateReader)
  .delete(readerController.deleteReader);

router
  .route("/:id/borrow-history")
  .get(readerController.getBorrowedHistory);
  
router
  .route("/:id/return-history")
  .get(readerController.getReturnedHistory);

module.exports = router;
