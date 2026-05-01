const express = require("express");
const sadeeparoutes = require("./Routes/SadeepaRoutes.js");
const dbconnect = require("./config/db_connect.js");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Database connection
dbconnect();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/sadeepa", sadeeparoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
