import TodoForm from "./Components/TodoForm";
import TodoSearch from "./Components/TodoSearch";
import TodoList from "./Components/TodoList";
import TodoFilter from "./Components/TodoFilter";
import { useTodos } from "./hooks/useTodos";

import "./App.css";

function App() {
  const {
    filteredTodos,
    addTodo,
    deleteTodo,
    editingId,
    editText,
    startEdit,
    saveEdit,
    toggleTodo,
    handleEditChange,
    searchQuery,
    handleSearchChange,
  } = useTodos();

  return (
    <>
      <header>
        <h1>My to-do list</h1>
      </header>
      <main>
        <div className="todo-card">
          <TodoForm onAdd={addTodo} />
          <TodoSearch query={searchQuery} onSearch={handleSearchChange} />
          <TodoFilter />
        </div>
        <TodoList
          todos={filteredTodos}
          hasSearch={searchQuery.trim() !== ""}
          editingId={editingId}
          editText={editText}
          onEditChange={handleEditChange}
          onStartEdit={startEdit}
          onSaveEdit={saveEdit}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      </main>
    </>
  );
}

export default App;
