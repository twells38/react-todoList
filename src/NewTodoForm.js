import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewToDoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuidv4(), complete: false });
    this.setState(state => ({ task: "" })); //clear form to be empty string again
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task"></label>
        <input
          key=""
          type="text"
          placeholder="New Todo"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
