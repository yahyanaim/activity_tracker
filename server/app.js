const express = require("express");
const cors = require("cors");

const ActivityRoute = require("./routes/activityRoute");
const AuthRoute = require("./routes/authRoute");

const app = express();

/* Telling the application to use the express.json() middleware. This middleware will parse the body of
any request that has a Content-Type of application/json. */
app.use(express.json());

/* Allowing the frontend to access the backend. */
app.use(cors());

/* This is a route handler. It is listening for a GET request to the root route of the application.
When it receives a request, it will send back a response with the string "Hello World!". */
app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  /* Telling the application to use the AuthRouter for any requests that start with "/api/auth". */
app.use("/api/", ActivityRoute);  

app.use("/api/auth", AuthRoute);

  
module.exports = app;