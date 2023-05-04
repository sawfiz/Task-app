import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Item({ task, onDelete, onUpdate }) {
  const [text, setText] = useState(task.title);
  const [isEdit, setIsEdit] = useState(false);
  let output;

  function onEdit() {
    setIsEdit(true);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleUpdate(e) {
    e.preventDefault();
    onUpdate(task.uid, text)
    setIsEdit(false);
  }

  if (isEdit) {
    output = (
      <li>
        <form onSubmit={handleUpdate}>
          <input type="text" value={text} onChange={handleChange}></input>
          <button type="submit">Update</button>
        </form>
      </li>
    );
  } else {
    output = (
      <li>
        {task.num} {task.title}
        <button
          className="fa-regular fa-pen-to-square"
          onClick={() => onEdit()}
        ></button>
        <button
          className="fa-regular fa-trash-can"
          onClick={() => onDelete(task.uid)}
        ></button>
      </li>
    );
  }

  return output;
}
