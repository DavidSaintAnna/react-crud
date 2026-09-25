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
        <p>
            {isEditing ? (
           <>
            <input type="text" value={editText} onChange={onEditChange} />
            <button onClick={onSaveEdit}>✅</button>
           </> 
         ) : (
            <>
            {todo.title}
            <button onClick={onStartEdit}>✏️</button>
            </>
         )}
        <button onClick={onDelete}>🗑️</button>
        </p>
    );
}

export default TodoItem;