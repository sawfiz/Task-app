import { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Overview from './components/Overview';

export default function TaskApp() {
  const [task, setTask] = useState({ title: '', uid: uniqid(), num: 1 });
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setTask({ title: e.target.value, uid: task.uid, num: task.num });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ title: '', uid: uniqid(), num: task.num +1 });
  }

  function handleDelete(uid) {
    setTasks(tasks.filter(task => task.uid !== uid))
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
        <Overview tasks={tasks} onDelete={handleDelete} />
      </form>
    </div>
  );
}
