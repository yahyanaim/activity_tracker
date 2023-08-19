const express=require("express");
const app = require("./app")

const PORT = process.env.PORT || 5000

// Connecting the Database
const connectDB = require("./db");
connectDB();

/* Connecting to the database and then starting the server. */
const server = app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${
        err.message
    }`)
    server.close(() => process.exit(1))
});
