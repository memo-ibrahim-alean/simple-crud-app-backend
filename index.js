const express = require("express");
const mongoose = require("mongoose");
const proudctRoutes = require("./routes/proudct.route.js"); 
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", proudctRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

mongoose
  .connect(
    `${process.env.MONGODB_URI}`,
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
