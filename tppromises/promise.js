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