const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! use /file?name=db.txt  to see the public data");
  //res.sendFile(`${__dirname}/db.txt`);
});

app.get("/file", (req, res) => {
  console.log(req.query.name);
  res.sendFile(`${__dirname}/${req.query.name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000/v?name=janne
// Hello janne
