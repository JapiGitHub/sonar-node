const express = require("express");
const app = express();
const port = 3000;

const password = "p455w0rd";

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/hard-to-guess-url-xyz", (req, res) => {
  res.send("password : " + password);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
