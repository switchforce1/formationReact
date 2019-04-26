import React, { Component } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  URL_TODOS = "http://localhost:3004/todos"
  constructor(props) {
    super(props)

    this.state = {
        todos: [],
        formMessage : "",
        todoForm : {
          title: "",
          completed : true
        }
    }
  }

  componentDidMount() {
    this.loadTodo();
  }
  
  deleteTodo = (todo)=>{
    const url_delete = `${this.URL_TODOS}/${todo.id}`;
    fetch(url_delete,{method:'DELETE'})
      .then(_ => this.loadTodo());
  }

  formUpdate = (event) => {
    let v = "";

    (event.target.type === "checkbox") ? v = event.target.checked : v = event.target.value;
    const name = event.target.name;
    this.setState((state) => {
      let todoForm = state.todoForm;
      todoForm[name] = v
      
      let s =  {...state, todoForm}
      return s;
    });
  }

  formSubmit = (event) => {
      console.log("submit")
      event.preventDefault();
      let todo =  this.state.todoForm;
      this.saveTodo(todo)
  }

  saveTodo = (todo) => {
    const conf = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(todo)
    }

    fetch(this.URL_TODOS,conf)
      .then(_ => this.loadTodo())
  }

  loadTodo(){
    fetch(`${this.URL_TODOS}?_sort=id&_order=desc`)
    .then(response => response.json())
    .then(todos => this.setState({todos : todos}));
  }

  render() {
    const todos = this.state.todos;
    return (
      <div className="container">
        <TodoForm values={this.state.todoForm} handleChange={this.formUpdate} handleSubmit={this.formSubmit} formMessage={this.formMessage}/>
        <TodoList todos={todos} deleteAction={this.deleteTodo}/>
      </div>
    )
  }
}

