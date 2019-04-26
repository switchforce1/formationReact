import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './TodoList';

export default class App extends React.Component {

  URL_TODOS = "http://10.0.2.2:3004/todos"
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

  componentDidMount = () => {
    this.loadTodo();
  }

  deleteTodo = (todo)=>{
    const url_delete = `${this.URL_TODOS}/${todo.id}`;
    fetch(url_delete,{method:'DELETE'})
      .then(_ => this.loadTodo());
  }

  loadTodo = () => {
    fetch(`${this.URL_TODOS}?_sort=id&_order=desc`)
    .then(response => response.json())
    .then(todos => this.setState({todos : todos}));
  }


  render() {
    const todos = this.state.todos;
    return (
      <View style={styles.container}>
        <TodoList todos={todos} deleteAction={this.deleteTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
