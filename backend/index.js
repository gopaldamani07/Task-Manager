const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TaskRouter = require("./routes/TaskRouter.js");
const connectDB = require("./models/db.js");
//const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT||5000;

// Middleware
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());

// Routes
app.use("/", TaskRouter);

// MongoDB Connection
connectDB()
.then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

