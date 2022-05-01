import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  /* Updates the current task text and unique id */
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };

  /* Delete task function */
  onDeleteItem = (e) => {
    let array = this.state.tasks;
    let index = e.target.value;

    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        tasks: array
      });
    };
  };

  /* I've managed to edit the item
  I think I could add an input box to the list item no problem, but then
  adding functionality to add that input value to the list item text will
  probably take a lot of time I'd rather spend on the CV project */
  onEditTask = (e) => {
    let array = this.state.tasks;
    let index = e.target.value;

    if (index !== -1) {
      console.log(array[index]);
      array[index].text = "Edit";
      this.setState({
        tasks: array
      });
    };
  };

  /* Adds the new task which was updated by the handleChange function above
  when the user typed in the task text */
  onSubmitTask = (e) => {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput" onChange={this.handleChange} value={task.text}/>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} onDeleteClicked={this.onDeleteItem} onEditClicked={this.onEditTask}/>
      </div>
    );
  }
}

export default App;