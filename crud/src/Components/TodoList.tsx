import type { Todo } from "../types";
import TodoItem from "./TodoItem";


interface TodoListProps {
    todos: Todo[];
    editingId: string | null;
    editText: string;
    onEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStartEdit: (id: string, currentTitle: string) => void;
    onSaveEdit: () => void;
    onDelete: (id:string) => void;
}

function TodoList({
    todos,
    editingId,
    editText,
    onEditChange,
    onStartEdit,
    onSaveEdit,
    onDelete,
}: TodoListProps) {
  return (
    <div>
        {todos.map(todo => (
        <TodoItem
         key={todo.id}
         todo= {todo}
         isEditing={todo.id === editingId}
         editText={editText}
         onEditChange={onEditChange}
         onStartEdit={() => onStartEdit(todo.id, todo.title)}
         onSaveEdit={onSaveEdit}
         onDelete={() =>onDelete(todo.id)}
         />
        ))}
    </div>
  )
}

export default TodoList;