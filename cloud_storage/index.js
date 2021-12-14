require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;

app.use("/public", express.static(__dirname + "/public"));

app.get("/create", (req, res) => {});

app.get("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`);
});
