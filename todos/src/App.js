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
    console.log("call todo ");
    console.log(todo);
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

  loadTodo(){
    fetch(this.URL_TODOS)
    .then(response => response.json())
    .then(todos => this.setState({todos : todos}));
  }

  render() {
    const todos = this.state.todos;
    return (
      <div className="container">
        <TodoForm values={this.state.todoForm} handleChange={this.formUpdate}/>
        <TodoList todos={todos} deleteAction={this.deleteTodo}/>
      </div>
    )
  }
}

