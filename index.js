const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //res.send("Hello World!" + req.body);
  res.sendFile(`${__dirname}/db.txt`);
});

app.get("/v", (req, res) => {
  console.log(req.query.name);

  res.send("Hello " + req.query.name);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000/v?name=janne
// Hello janne
