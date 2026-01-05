const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

// Gunakan IP laptopmu agar bisa diakses dari HP
const PORT = 3000;
app.get("/", (req, res, next) => {
  res.sendFile("./public/index.html");
});
app.listen(PORT);
