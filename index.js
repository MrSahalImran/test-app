const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from ECS 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
