import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Item({task, onDelete}) {

  return (
    <li> 
      {task.num} {task.title}
      <button
        className="fa-regular fa-trash-can"
        onClick={() => onDelete(task.uid)}
      ></button>
    </li>
  );
}
