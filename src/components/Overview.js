import React from 'react';
import Item from './Item';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Overview({ tasks, onDelete, onUpdate }) {
  return (
    <div>
      Overview
      <ul>
        {tasks.map((task) => (
          <Item key={task.uid} task={task} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  );
}
