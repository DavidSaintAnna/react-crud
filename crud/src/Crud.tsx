import { useState } from "react";
import "./App.css";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

function Crud() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Todo[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleEditChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEditText(event.target.value);
  }

  function addUser() {
    if (text.trim() === "") return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setItems([...items, newTodo]);
    setText("");
  }

  function deleteUser(idToDelete: string) {
    setItems(items.filter((item) => item.id !== idToDelete));
  }

  function startEdit(index: number) {
    setEditingIndex(index);
    setEditText(items[index].title);
  }

  function saveEdit() {
    const newItems = items.map((item, index) =>
      index === editingIndex ? { ...item, title: editText } : item,
    );
    setItems(newItems);
    setEditingIndex(null);
    setEditText("");
  }

  return (
    <>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={addUser}>Add</button>
        <div>
          {items.map((item, index) => (
            <p key={item.id}>
              {index === editingIndex ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={handleEditChange}
                  />
                  <button onClick={saveEdit}>✅</button>
                </>
              ) : (
                <>
                  {item.title}
                  <button onClick={() => startEdit(index)}>✏️</button>
                </>
              )}
              <button onClick={() => deleteUser(item.id)}>🗑️</button>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Crud;
