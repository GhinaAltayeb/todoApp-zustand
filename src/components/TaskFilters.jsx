
function TaskFilters({filter, setFilter }) {
    return (
        <div className="mt-6 flex w-full justify-center gap-2 rounded-xl bg-slate-200/70 p-1 sm:w-auto">
            <button
                type="button"
                onClick={() => setFilter("all")}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-white/70 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${filter === "all" ? "bg-white text-indigo-700" : ""}`}
            >
                All
            </button>

            <button
                type="button"
                onClick={() => setFilter("active")}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-white/70 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${filter === "active" ? "bg-white text-indigo-700" : ""}`}
            >   
                Active
            </button>

            <button
                type="button"
                onClick={() => setFilter("completed")}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-white/70 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${filter === "completed" ? "bg-white text-indigo-700" : ""}`}
            >
                Completed
            </button>
        </div>
    );
}

export default TaskFilters;
