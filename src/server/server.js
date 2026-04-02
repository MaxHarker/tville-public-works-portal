// server/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary in-memory storage
let requests = [];

// GET all requests
app.get("/api/requests", (req, res) => {
  res.json(requests);
});

// POST a new request
app.post("/api/requests", (req, res) => {
  const newRequest = req.body;

  requests.push(newRequest);

  console.log("New request received:", newRequest);

  res.status(201).json(newRequest);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});