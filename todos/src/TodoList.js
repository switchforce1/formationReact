import React from 'react'
import TodoItem from './TodoItem';
// import TodoItem from './TodoItem';

export default function TodoList(props) {
    // console.log(props);
    const data = props.todos;

    const todos = data.map(todo => (
        <TodoItem todo={todo}  key={todo.id} deleteAction={props.deleteAction}/>   
    ));
  return (
    <table className="table table-stripped">
        <thead>
            <tr>
                <th>#</th>
                <th>userId</th>
                <th>Title</th>
                <th>completed</th>
                <th>Action(s)</th>
            </tr>
        </thead>
        <tbody>
            {todos}
        </tbody>
    </table>
  );
   
}
