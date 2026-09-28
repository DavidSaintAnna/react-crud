
import type { Filter } from "../types";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "done", label: "Done" },
];

interface TodoFilterProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

function TodoFilter({ filter, onFilterChange }: TodoFilterProps) {
  return (
    <div className="filter-row">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          className={`filter-button ${filter === value ? "active" : ""}`}
          onClick={() => onFilterChange(value)}
          aria-pressed={filter === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;