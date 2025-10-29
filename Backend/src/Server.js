const express = require("express");
const sadeeparoutes = require("./Routes/SadeepaRoutes.js");
const dbconnect = require("./config/db_connect.js");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
dbconnect();

// middleware
app.use(express.json());

app.use("/sadeepa", sadeeparoutes);
app.use("/sadeepa", sadeeparoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});

// mongodb+srv://sadeedina2002_db_user:3XR3T34MJAr9FPWw@testcluster.lv7ycwo.mongodb.net/?appName=TestCluster
