interface TodoSearchProps {
  query: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TodoSearch({ query, onSearch }: TodoSearchProps) {
  return (
    <div className="search-row">
      <input
        type="text"
        className="create-input"
        placeholder="Search tasks"
        value={query}
        onChange={onSearch}
      />
      <button
        className="icon-square-button search-disabled"
        aria-label="Search tasks"
        type="button"
      >
        🔍
      </button>
    </div>
  );
}

export default TodoSearch;
