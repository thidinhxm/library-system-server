const { Router } = require("express");
const router = Router();

const librarianController = require("./librarianController");

router
  .route("/")
  .get(librarianController.getAllLibrarian)
  .post(librarianController.createLibrarian)

router
  .route("/:id")
  .patch(librarianController.updateLibrarian)
  .delete(librarianController.deleteLibrarian);

module.exports = router;