import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { title: '' },
      tasks: [],
    };
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ task: { title: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    this.setState({
      task: {title: ''},
      // Construct a new array with spread operator `...` on this.state.tasks
      // then add this.state.task to the array
      tasks: [...this.state.tasks, this.state.task],
    }, () =>  console.log(this.state));
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <h1>Task App</h1>
        <form className="task-form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Enter a task here..."
            value={task.title}
            onChange={this.handleChange.bind(this)}
          ></input>
          <button type="submit">Add to List</button>
        </form>
      </div>
    );
  }
}

export default App;
