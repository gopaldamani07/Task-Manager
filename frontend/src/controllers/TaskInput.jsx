import React from "react";
import { FaPlus } from "react-icons/fa";

function TaskInput({ newTask, setNewTask, handleCreateTask }) {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleCreateTask()}
        placeholder="Add a new task..."
        className="flex-grow bg-slate-700/50 border-2 border-slate-600 rounded-lg px-4 py-2 text-slate-100 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      />
      <button
       onClick={handleCreateTask}
        className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg"
      >
       <FaPlus />
      </button>
    </div>
  );
}

export default TaskInput;
