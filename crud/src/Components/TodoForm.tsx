import { useState, type HtmlHTMLAttributes } from "react";


interface TodoFormProps {
    onAdd: (title: string) => void;
}

function TodoForm({onAdd} : TodoFormProps) {
    const [text, setText] = useState("");


function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
}

function handleSubmit() {
    onAdd(text);
    setText("")
}

return (
    <div className="main-section">
        <input type="text" className="create-input" value={text} onChange={handleChange} />
        <button className="add-button" onClick={handleSubmit}>Add</button>
    </div>
)
}

export default TodoForm;