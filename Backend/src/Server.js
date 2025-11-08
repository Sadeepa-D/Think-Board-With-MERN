const express = require("express");
const sadeeparoutes = require("./Routes/SadeepaRoutes.js");
const dbconnect = require("./config/db_connect.js");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const cors = require("cors");
const app = express();
dbconnect();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}
app.use(express.json());

app.use("/sadeepa", sadeeparoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../Frontend/vite-project/dist")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Frontend/vite-project/dist"));
  });
}
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});

// mongodb+srv://sadeedina2002_db_user:3XR3T34MJAr9FPWw@testcluster.lv7ycwo.mongodb.net/?appName=TestCluster
