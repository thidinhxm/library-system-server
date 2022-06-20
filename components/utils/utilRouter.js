const { Router } = require("express");
const router = Router();

const mailer = require("./mailer");

router
  .route("/")
  .post(mailer.sendEmail)


module.exports = router;