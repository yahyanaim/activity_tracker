
const mongoose = require("mongoose")
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://yahyanaim2001:admin@cluster0.i7b2xb9.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("MongoDB Connected")
}
module.exports = connectDB
