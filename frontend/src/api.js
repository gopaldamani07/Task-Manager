
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

// Create Task
export const createTask = (task) => API.post("/", task);

// Get All Tasks
export const getAllTasks = () => API.get("/");

// Update Task
export const updateTaskById = (id, task) => API.put(`/${id}`, task);

// Delete Task
export const deleteTaskById = (id) => API.delete(`/${id}`);
