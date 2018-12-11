import React, { Component } from 'react';
import './App.css';
import { inject, observer } from "mobx-react";

@inject('AppStore') 
@observer
class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const todo = this.todo.value;
    this.props.AppStore.addTask(todo);
    this.todo.value = '';
  }

  render() {

    const { AppStore } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          You have { AppStore.todosCount} todos!
        </header>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter task" ref={input => this.todo = input}/> 
          <button> Add task</button>
        </form>

        <ul>
          {AppStore.todos.map((todo, i) => <li key={i}>{todo}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
