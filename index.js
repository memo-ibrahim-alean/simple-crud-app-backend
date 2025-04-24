const express = require("express");
const mongoose = require("mongoose");
const proudctRoutes = require("./routes/proudct.route.js"); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", proudctRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

mongoose
  .connect(
    "mongodb+srv://memo:qnqP2OfIfvfV1fCZ@backenddb.qgs6ekd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
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
