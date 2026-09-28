import { useState } from "react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit() {
    onAdd(text);
    setText("");
  }

  return (
    <div className="task-row">
      <input
        type="text"
        className="create-input"
        placeholder="Add new task"
        value={text}
        onChange={handleChange}
      />
      <button
        className="icon-square-button"
        onClick={handleSubmit}
        aria-label="Add task"
      >
        +
      </button>
    </div>
  );
}

export default TodoForm;
