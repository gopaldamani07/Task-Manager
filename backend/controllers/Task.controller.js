const TaskModel = require("../models/taskModel");

// Create task
const createTask = async (req, res) => {
  try {
    // const taskName = req.body.taskName;
    const  {taskName } = req.body;
    if (!taskName) {
      return res.status(400).json({ error: "Task name is required" });
    }

    const newTask = await TaskModel.create( {taskName });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tasks
const fetchAllData = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update task
const updateTaskById = async (req, res) => {
  try {
    const updated = await TaskModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete task
const DeleteTask = async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTask, fetchAllData, updateTaskById, DeleteTask };
