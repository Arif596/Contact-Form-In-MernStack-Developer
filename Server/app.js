const express = require("express");
const cors = require("cors");
const route = require("./Routes/route");
const app = express();

// MongoDB connection setup
require("./Connection/connection");

app.use(express.json());
app.use(cors());

// Test Route
app.get("/", (req, res) => {
  res.send("Hello From server");
});

// API Routes
app.use("/api/v1", route);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
