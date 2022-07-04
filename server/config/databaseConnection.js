const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => console.log(`Connected database on ${process.env.DATABASE_URL}`))
    .catch(() => console.error("Unable to connect to DB"));