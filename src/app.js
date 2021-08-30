const express = require("express");
const app = express();
const path = require("path")
app.use(express.static(path.join(__dirname, "../public")));
app.get("", (req, res) => {
  res.send("Hello Express!");
});

app.get("/help", (req, res) => {
  res.send({
    name: "kekw",
  });
});

app.get("/about", (req, res) => {
  res.send("Title");
});
app.get("/weather", (req, res) => {
  res.send("kek");
});

app.listen(3000, () => {
  console.log("running");
});
