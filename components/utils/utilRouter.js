const { Router } = require("express");
const router = Router();

const mailer = require("./mailer");

router
  .route("/authenticate-reader")
  .post(mailer.sendEmailReader)

router
  .route("/authenticate-librarian")
  .post(mailer.sendEmailLibrarian)


module.exports = router;