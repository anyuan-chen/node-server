const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "hbs");
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Andrew CHen",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Andrew Chen",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "help me baby",
  });
});
app.get("/weather", (req, res) => {
  res.send("kek");
});

app.listen(3000, () => {
  console.log("running");
});
