const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use("/public", express.static(__dirname + "/public"));

app.post("/presigned", (req, res) => {});

app.post("/create", (req, res) => {
  // const { files } = req.body;
  console.log(req.body);
  res.send(JSON.stringify([]));
});

app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`);
});
