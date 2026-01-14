import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskInput from "./TaskInput";
import TaskSearch from "./TaskSearch";
import TaskList from "./TaskList";
import {createTask, deleteTaskById, getAllTasks, updateTaskById, } from "../api";



function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await getAllTasks();
      setTasks(data);
    } catch {
      toast.error("Failed to fetch tasks");
    }
  };

  const handleCreateTask = async () => {
    if (!newTask.trim()) return toast.warning("Enter a task");
    try {
      await createTask({ taskName: newTask });
      toast.success("Task created");
      setNewTask("");
      fetchTasks();
    } catch {
      toast.error("Failed to create task");
    }
  };

  const handleUpdateTask = async (id) => {
    if (!editingTask?.taskName.trim()) return toast.warning("Enter a task");
    try {
      await updateTaskById(id, { taskName: editingTask.taskName });
      toast.success("Task updated");
      setEditingTask(null);
      fetchTasks();
    } catch {
      toast.error("Failed to update task");
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTaskById(id);
      toast.success("Task deleted");
      fetchTasks();
    } catch {
      toast.error("Failed to delete task");
    }
  };

  const handleToggleDone = async (task) => {
    try {
      await updateTaskById(task._id, { isDone: !task.isDone });
      fetchTasks();
    } catch {
      toast.error("Failed to update task status");
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white flex justify-center items-start p-4 sm:p-6">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 py-2">
            Task Manager
          </h1>
          <p className="text-slate-400">Stay organized, stay productive.</p>
        </header>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-6">
          <TaskInput
            newTask={newTask}
            setNewTask={setNewTask}
            handleCreateTask={handleCreateTask}
          />
          <TaskSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <TaskList
            filteredTasks={filteredTasks}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
            handleUpdateTask={handleUpdateTask}
            handleToggleDone={handleToggleDone}
            handleDeleteTask={handleDeleteTask}
            searchTerm={searchTerm}
          />
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
    </div>
  );
}

export default TaskManager;
