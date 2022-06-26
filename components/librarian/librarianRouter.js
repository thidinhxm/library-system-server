const { Router } = require("express");
const authMiddleware = require("../auth/authMiddleware");
const router = Router();

const librarianController = require("./librarianController");

router
  .route("/")
  .get(authMiddleware.isLibrarian, librarianController.getAllLibrarian)
  .post(authMiddleware.isLibrarian, librarianController.createLibrarian)

router
  .route("/:id")
  .patch(authMiddleware.isLibrarianManager, librarianController.updateLibrarian)
  .delete(authMiddleware.isLibrarianManager, librarianController.deleteLibrarian);

module.exports = router;