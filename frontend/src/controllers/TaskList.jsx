import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  filteredTasks,
  editingTask,
  setEditingTask,
  handleUpdateTask,
  handleToggleDone,
  handleDeleteTask,
  searchTerm,
}) {
  return (
    <ul className="space-y-3 h-96 overflow-y-auto pr-2">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
            handleUpdateTask={handleUpdateTask}
            handleToggleDone={handleToggleDone}
            handleDeleteTask={handleDeleteTask}
          />
        ))
      ) : (
        <div className="text-center py-12 text-slate-500">
          <p>
            {searchTerm
              ? "No tasks match your search."
              : "Your task list is empty. Add a task to get started!"}
          </p>
        </div>
      )}
    </ul>
  );
}

export default TaskList;

