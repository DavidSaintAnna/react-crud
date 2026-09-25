import { useState } from "react";
import type { Todo} from "../types";



export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [editingId, setEditingID] =  useState<string | null>(null);
    const [editText, setEditText] = useState(" ");


    function addTodo(title : string) {
        if(title.trim() === "") return;
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            title,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTodos(prev => [...prev, newTodo])
    }
    function deleteTodo(id: string) {
        setTodos(prev =>  prev.filter(todo => todo.id !== id));
    }
    function startEdit(id: string, currentTitle: string) {
        setEditingID(id);
        setEditText(currentTitle);
    }
    function saveEdit() {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === editingId ? {...todo, title: editText} : todo,
            ),
        );
        setEditingID(null);
        setEditText("");
    }

    function handleEditChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEditText(event.target.value);
    }
    return {
      todos,
      addTodo,
      deleteTodo,
      editingId,
      editText,
      startEdit,
      saveEdit,
      handleEditChange,
    };
}