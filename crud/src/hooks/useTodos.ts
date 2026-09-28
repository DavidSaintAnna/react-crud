import { useState } from "react";
import type { Todo } from "../types";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function addTodo(title: string) {
    if (title.trim() === "") return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function startEdit(id: string, currentTitle: string) {
    setEditingId(id);
    setEditText(currentTitle);
  }

  function saveEdit() {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editingId ? { ...todo, title: editText } : todo,
      ),
    );
    setEditingId(null);
    setEditText("");
  }

  function handleEditChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEditText(event.target.value);
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  return {
    todos,
    filteredTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editingId,
    editText,
    startEdit,
    saveEdit,
    handleEditChange,
    searchQuery,
    handleSearchChange,
  };
}
