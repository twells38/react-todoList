import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    this.createNewTodo = this.createNewTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  createNewTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  } //then pass this method to newtodoform as a props

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id != id)
    });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          toggleTodo={this.toggleCompletion}
          updateTodo={this.update}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A simple React Project- Todo List App </span>
        </h1>
        <NewTodoForm createTodo={this.createNewTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
