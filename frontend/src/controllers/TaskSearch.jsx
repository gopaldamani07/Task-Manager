import React from "react";
import { FaSearch } from "react-icons/fa";

function TaskSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className="w-full bg-slate-700/50 border-2 border-slate-600 rounded-lg pl-10 pr-4 py-2 text-slate-100 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      />
     <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
    </div>
  );
}

export default TaskSearch;
