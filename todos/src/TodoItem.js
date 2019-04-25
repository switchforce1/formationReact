import React from 'react'

export default function TodoItem(props) {
    const todo = props.todo;
    // console.log(props.deleteAction)
    return (
        <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.userId}</td>
            <td>{todo.title}</td>
            <td>{todo.completed? <span> &#x2713; </span>: <span>&#x2718; </span>}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={_ => (props.deleteAction(todo))}>Delete</button>
                <button className="btn btn-warning btn-sm">Edit</button>
            </td>
        </tr>
    )
}
