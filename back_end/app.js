// index.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let index = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

// routes for our API
let router = express.Router();

// home route
router.get("/", index);

// register our routes
app.use("/api", router);

// start server
app.listen(port);
console.log("operating on: " + port);
