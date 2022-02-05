const express = require("express");
const app = express();
const port = 3000;

const password = "p455w0rd";

app.get("/", (req, res) => {
  res.send("Hello World! use /file?name=db.txt  to see the public data");
  //res.sendFile(`${__dirname}/db.txt`);
});

app.get("/hard-to-guess-url-xyz", (req, res) => {
  res.send("password : " + password);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
