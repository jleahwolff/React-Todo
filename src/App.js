import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';
// import { throwStatement } from '@babel/types';

const tasks = [

{
  id: 1,
  task: 'Make the bed',
  completed: false
},
{
  id: 2,
  task: 'Vacuum the stairs',
  completed: true
}
];

// localStorage.setItem('tasks', JSON.stringify(tasks))
// let json = JSON.stringify(tasks);
// alert(JSON.stringify(json))

class App extends Component {
  // you will need a place to store your state in this component.
constructor() {
  super();
  // Initialize the state object
  this.state = {
    todoList: tasks
  };
}

toggleCompleted = id => {
  const newtodoList = this.state.todoList.map(task => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed
      };
    } else {
      return task;
    }
  });
  // update todoList

  this.setState ({
    todoList: newtodoList
  });
  // localStorage.setItem('todoList', JSON.stringify(newtodoList))
};

addTask = taskName => {
  const newTask = {
    name: taskName,
    id: Date.now(),
    completed: false
  };

  this.setState({
    todoList: [...this.state.todoList, newTask]
    
  });
  localStorage.setItem('todoList', JSON.stringify(newTask))
};

deleteTask = () => {
  this.setState({todoList: this.state.todoList.filter( e => {
    return e.completed === false
  })})
}

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  // render is comparable to a funtion component's return
  // render is in charge of rendering JSX!
  render() {
    console.log('rendering...');
    // You can do any JS stuff above the return 
    
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
          deleteTask= {this.deleteTask}
        />
        {/* <h2>Welcome to your Todo App!</h2> */}
      </div>
    );
  }
}

export default App;
