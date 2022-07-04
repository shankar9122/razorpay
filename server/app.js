const express = require("express");
const { config } = require("dotenv");
const paymentRouter = require("./routes/paymentRoute");
const cors = require("cors")
config({ path: "./config/.env" })

const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", paymentRouter);



app.get("/api/v1/getkey", (req, res) => {

    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY
    })
})


module.exports = app;