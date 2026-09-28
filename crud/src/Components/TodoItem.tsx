import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  isEditing: boolean;
  editText: string;
  onEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onStartEdit: () => void;
  onSaveEdit: () => void;
  onDelete: () => void;
  onToggle: () => void;
}

function TodoItem({
  todo,
  isEditing,
  editText,
  onEditChange,
  onStartEdit,
  onSaveEdit,
  onDelete,
  onToggle,
}: TodoItemProps) {
  return (
    <div className="todo-items">
      <div className="action-icons">
        <button
          className={`toggle-done ${todo.completed ? "done" : "pending"}`}
          onClick={onToggle}
          aria-label={todo.completed ? "Mark as pending" : "Mark as done"}
        >
          ✓
        </button>

        {isEditing ? (
          <>
            <input
              type="text"
              className="edit-input"
              value={editText}
              onChange={onEditChange}
            />
            <button className="icon-button save" onClick={onSaveEdit}>
              ✅
            </button>
          </>
        ) : (
          <>
            <span className="todo-title">{todo.title}</span>
            <button className="icon-button edit" onClick={onStartEdit}>
              ✏️
            </button>
          </>
        )}
        <button className="icon-button delete" onClick={onDelete}>
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
