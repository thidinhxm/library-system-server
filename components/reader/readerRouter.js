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
  .get(readerController.getHistoryBorrow);
router
  .route("/:id/return-history")
  .get(readerController.getHistoryReturn);

module.exports = router;
