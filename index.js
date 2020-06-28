const path = require("path");
const express = require("express");
const helmet = require("helmet");

const app = express();
const port = process.env.PORT || 4001;

app.use(helmet());
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("Serving client...");
});
