const { Router } = require("express");
const router = Router();

const readerController = require("./readerController");

router.route("/").get(readerController.getAllReader);

router.route("/:readerID/borrow-history").get(readerController.getHistoryBorrow);
router.route("/:readerID/return-history").get(readerController.getHistoryReturn);

module.exports = router;
