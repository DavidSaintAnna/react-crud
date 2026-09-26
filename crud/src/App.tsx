import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import TodoFilter from './Components/TodoFilter'
import { useTodos } from './hooks/useTodos'

import "./App.css";

function App() {
    const  {
        todos,
        addTodo,
        deleteTodo,
        editingId,
        editText,
        startEdit,
        saveEdit,
        handleEditChange,
    } = useTodos();

    return (
      <>
        <header>
          <h1>TODO</h1>
        </header>
        <main>
          <TodoForm onAdd={addTodo} />
          <TodoFilter />
          <TodoList
            todos={todos}
            editingId={editingId}
            editText={editText}
            onEditChange={handleEditChange}
            onStartEdit={startEdit}
            onSaveEdit={saveEdit}
            onDelete={deleteTodo}
          />
        </main>
      </>
    );
}

export default App