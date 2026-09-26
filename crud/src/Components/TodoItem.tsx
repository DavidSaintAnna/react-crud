import type {Todo} from "../types"

interface TodoItemProps {
    todo: Todo;
    isEditing: boolean;
    editText: string;
    onEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStartEdit: () => void;
    onSaveEdit: () => void;
    onDelete: () => void;
}

function TodoItem ({
    todo,
    isEditing,
    editText,
    onEditChange,
    onStartEdit,
    onSaveEdit,
    onDelete,
}: TodoItemProps) {
    return (
      <div className="todo-items">
        <div className="action-icons">
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
              <span>{todo.title}</span>
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