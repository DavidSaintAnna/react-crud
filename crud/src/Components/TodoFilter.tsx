import { useState } from "react";

const FILTERS = ["All", "Pending", "Done"] as const;

function TodoFilter() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  return (
    <div className="filter-row">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          className={`filter-button ${active === filter ? "active" : ""}`}
          onClick={() => setActive(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;