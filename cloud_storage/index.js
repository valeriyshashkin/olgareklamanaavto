require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

app.use("/public", express.static(__dirname + "/public"));

app.get("/create", (req, res) => {});

app.get("/delete", (req, res) => {});

app.listen(port);
