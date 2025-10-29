const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello" });
});

// getting data
app.post("/api/send", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ status: "Success", received: req.body });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
