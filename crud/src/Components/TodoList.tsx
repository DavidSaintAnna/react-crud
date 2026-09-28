import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  editingId: string | null;
  editText: string;
  hasSearch: boolean;
  onEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onStartEdit: (id: string, currentTitle: string) => void;
  onSaveEdit: () => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

function TodoList({
  todos,
   hasSearch,
  editingId,
  editText,
  onEditChange,
  onStartEdit,
  onSaveEdit,
  onDelete,
  onToggle,
}: TodoListProps) {
  if (todos.length === 0) {
     return (
      <p className="empty-state">
        {hasSearch ? "No tasks match your search." : "No tasks yet."}
      </p>
     );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={todo.id === editingId}
          editText={editText}
          onEditChange={onEditChange}
          onStartEdit={() => onStartEdit(todo.id, todo.title)}
          onSaveEdit={onSaveEdit}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
