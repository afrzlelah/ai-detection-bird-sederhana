const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

// Gunakan IP laptopmu agar bisa diakses dari HP
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server jalan di http://localhost:${PORT}`);
  console.log(`📱 Di HP, buka: http://[ALAMAT-IP-LAPTOP]:${PORT}`);
});
