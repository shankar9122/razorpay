const express = require("express");
const { checkout, paymentVerification } = require("../controllers/paymentController");

const paymentRouter = express.Router();


paymentRouter.route("/checkout").post(checkout)

paymentRouter.route("/paymentVerification").post(paymentVerification)


module.exports = paymentRouter;