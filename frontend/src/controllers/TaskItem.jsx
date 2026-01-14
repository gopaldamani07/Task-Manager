import React from "react";
import { FaCheck, FaPencilAlt, FaTrash, FaUndo } from "react-icons/fa";

function TaskItem({
  task,
  editingTask,
  setEditingTask,
  handleUpdateTask,
  handleToggleDone,
  handleDeleteTask,
}) {
  return (
    <li
      className={`flex justify-between items-center bg-slate-700/40 p-3 rounded-lg transition-all duration-300 ${
        task.isDone ? "opacity-50" : "hover:bg-slate-700/80"
      }`}
    >
      {editingTask?._id === task._id ? (
        <>
          <input
            type="text"
            value={editingTask.taskName}
            onChange={(e) =>
              setEditingTask({ ...editingTask, taskName: e.target.value })
            }
            onKeyDown={(e) => e.key === "Enter" && handleUpdateTask(task._id)}
            className="flex-grow bg-slate-600 border border-slate-500 rounded-md px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={() => handleUpdateTask(task._id)}
            className="ml-3 text-green-400 p-2 rounded-full hover:bg-slate-600 hover:scale-110"
          >
            <FaCheck />
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-grow cursor-pointer ${
              task.isDone ? "text-slate-500 line-through" : "text-slate-100"
            }`}
            onClick={() => handleToggleDone(task)}
          >
            {task.taskName}
          </span>
          <div className="flex gap-2 items-center ml-4">
            <button
              onClick={() => handleToggleDone(task)}
              className={`p-2 rounded-full hover:scale-110 ${
                task.isDone
                  ? "text-slate-400 hover:text-white hover:bg-slate-600"
                  : "text-green-400 hover:text-white hover:bg-green-600"
              }`}
            >
              {task.isDone ? <FaUndo /> : <FaCheck />}
            </button>
            <button
              onClick={() => setEditingTask(task)}
              className="p-2 rounded-full text-slate-400 hover:text-yellow-400 hover:bg-slate-600 hover:scale-110"
            >
              <FaPencilAlt />
            </button>
            <button
              onClick={() => handleDeleteTask(task._id)}
              className="p-2 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-600 hover:scale-110"
            >
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
