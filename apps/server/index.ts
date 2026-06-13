import express from "express";

const app = express();

app.get("/", async (req, res) => {
  res.json("Hello World");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
