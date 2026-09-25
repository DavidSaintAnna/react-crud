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
    <div>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>
    </div>
)
}

export default TodoForm;