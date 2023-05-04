import { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Overview from './components/Overview';

export default function TaskApp() {
  const [task, setTask] = useState({ title: '', uid: uniqid(), num: 1 });
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    // setTask({ title: e.target.value, uid: task.uid, num: task.num });
    // Create a new object with only the title of this object updated
    // set Task to this new object
    setTask({...task, title: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ title: '', uid: uniqid(), num: task.num +1 });
  }

  function handleDelete(uid) {
    setTasks(tasks.filter(task => task.uid !== uid))
  }

  function updateTask(uid, text) {
    setTasks(tasks.map(t=>{
      if (t.uid === uid) {
        // Create a new task object, but with title updated
        return {...t, title : text}
      } else {
        // Make no change to the task
        return t;
      }
    }))
    
    console.log('updated!');
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
      </form>
        <Overview tasks={tasks} onDelete={handleDelete} onUpdate={updateTask} />
    </div>
  );
}
