// import modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// routes (1)
const route = require("./routes/route");

// connect ot mongogdb
mongoose.connect("mongodb://localhost:27017/5E-Spell-Manager");

// on connection
mongoose.connection.on("connected", () => {
  console.log("DB Connected @ 27017");
});

// on connection error
mongoose.connection.on("error", err => {
  if (err) {
    console.log("DB Error: " + err);
  }
});

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// routes (2)
app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
