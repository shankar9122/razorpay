const Razorpay = require("razorpay");
const crypto = require("crypto");
const PaymentModal = require("../modals/paymentModal")


exports.checkout = async (req, res) => {

    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET,
    });

    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
    };
    const order = await instance.orders.create(options);

    console.log(order)


    res.status(200).json({
        success: true,
        order
    })
};

exports.paymentVerification = async (req, res) => {

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest('hex');


    if (expectedSignature === razorpay_signature) {

        await PaymentModal.create({
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
        })

        res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`)

    } else {
        res.status(400).json({
            success: false,
        })
    }


}