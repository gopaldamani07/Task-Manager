const express = require("express");
const {
  createTask,
  fetchAllData,
  updateTaskById,
  DeleteTask,
} = require("../controllers/Task.controller.js");

const router = express.Router();


//to create tasks
router.post("/tasks", createTask);


//to fetchtask
router.get("/tasks", fetchAllData);


// to give the task to users
router.put("/tasks/:id", updateTaskById);


// to delete the task 
router.delete("/tasks/:id", DeleteTask);


module.exports = router;
