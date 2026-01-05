const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Vercel tidak butuh app.listen(PORT) secara eksplisit seperti ini,
// tapi untuk testing lokal tetap boleh ada.
module.exports = app;
