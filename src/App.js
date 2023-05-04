import { useEffect, useState } from 'react';
import './App.css';

export default function TaskApp() {
  const [task, setTask] = useState({ title: '' });
  const [tasks, setTasks] = useState([]);
  useEffect(() => {console.log(tasks)}, [tasks])

  function handleChange(e) {
    setTask({title: e.target.value})
    console.log(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task] )
  }

  return (
    <div>
      <h1>Task App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a task" value={task.title} onChange={handleChange}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
