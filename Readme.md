


tp4 => Events sur les composant
tp5 => List and keys 

https://code.visualstudio.com/



# Hello
ReactDOM.render(
	React.createElement("h1", null, "Hello, world without JSX!"),
  document.getElementById('root')
);

# Add react to a website
https://reactjs.org/docs/add-react-to-a-website.html

#install http-server globalement
npm install -g http-server

#Babel pour support JSX
```
 <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
# full Hello
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
</head>

<body>
    <div id="root"></div>
    <div id="root2"></div>




    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
            ReactDOM.render(
                React.createElement("h1", null, "Hello, world without JSX!"),
                document.getElementById('root')
            );
            ReactDOM.render(
                <h1>Hello, world with JSX!</h1>,
                document.getElementById('root2')
            );

</script>

</body>

</html>
```

#Doc React
https://reactjs.org/docs/hello-world.html

#State class Clock
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

# Create React App
https://github.com/facebook/create-react-app
npm install -g create-react-app



#JSON
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  }]



function ShowTodos() {
    const todos = data.map(todo => (
        <tr>
            <td>{}</td>
        </tr>)
    );

  return (
    <table>
        {todos}
    </table>

  );
}

export default ShowTodos;

# React-js-snippets
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets


```
import React, { Component } from 'react'

export class TextComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName:"Robert",
            lastName:"DUPONT"
        }
    }

    handleChange(value){

        this.setState({theValue:value});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        
        console.log(this.state.theValue)
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit} >
                    <input name="lastName"
                        value={this.state.lastName} 
                        onChange={event => this.setState({theValue:event.target.value})}
                    />

                    <input name="firstName"
                        value={this.state.firstName} 
                        onChange={event => this.setState({theValue:event.target.value})}
                    />         
                    <button type="submit">OK</button>
                </form>
                <pre>{JSON.stringify(this.state)}</pre>


            </div>
        )
    }
}

export default TextComp
```



# Json server
npm install -g json-server
https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/todos
json-server --watch todos.json --port 3004

# Postman
https://www.getpostman.com/products


# Promise 
```
function getTodo(id){
    const p = new Promise(function(resolve,reject){
        setTimeout(function(){
            const todo={id:id,action:"Action id "+id}
            resolve(todo);
        },1000);

    });
    return p;
}

// const pTodo = getTodo(1);

// pTodo
//     .then(todo=>{
//         console.log(todo)
//         return getTodo(2);
//     })
//     .then(todo=>{
//         console.log(todo)
//         return getTodo(3);
//     })


    const pTodo1 = getTodo(1);
    const pTodo2 = getTodo(2);
    const pTodo3 = getTodo(3);
    const pTodo4 = getTodo(4);


    Promise.all([pTodo1,pTodo2,pTodo3,pTodo4]).then(arr => console.log(arr))
```


#Async / Await
```
function getTodo(id){
    const p = new Promise(function(resolve,reject){
        setTimeout(function(){
            const todo={id:id,action:"Action id "+id}
            resolve(todo);
        },1000);

    });
    return p;
}



async function getTodos(){
    todo1 = await getTodo(1)
    console.log(todo1)
    todo2 = await getTodo(2)
    console.log(todo2)
    todo3 = await getTodo(3)
    console.log(todo3)
}



getTodos();
```
# Delete Todo
```
  deleteTodo = (todo)=>{
    const url_delete = `${URL_TODOS}${todo.id}`;
    
    fetch(url_delete,{method:'DELETE'}).then(_ => this.loadTodo())

  }
```


#formUpdate ES5
```
  formUpdate=(e)=>{
    const theValue = {[e.target.name] : e.target.type==='checkbox'?e.target.checked:e.target.value};

    this.setState((state,props)=>{
      Object.assign(state.todoForm,theValue) 
      console.log(state.todoForm);
      
      return state;
    });
      
  }
```


#Save todo
```
  saveTodo=(e)=>{
    e.preventDefault();
    const data = this.state.todoForm
    const conf = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    }
    fetch(URL_TODOS,conf).then(_ => this.loadTodo())
  }
```

# Context API
https://github.com/fgaurat/form_react_context

# Redux Todo
https://github.com/fgaurat/react03042019_todos_redux

# React native
https://facebook.github.io/react-native/

#Expo
npm install -g expo-cli

#Git
https://git-scm.com/
