import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Overview from './components/Overview';

export default function TaskApp() {
  const [task, setTask] = useState({ title: '', uid: uniqid() });
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function handleChange(e) {
    setTask({ title: e.target.value, uid: task.uid });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ title: '', uid: uniqid() });
  }

  return (
    <div>
      <h1>Task App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task.title}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
        <Overview tasks={tasks} />
      </form>
    </div>
  );
}
