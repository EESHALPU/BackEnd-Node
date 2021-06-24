const newTodos=[
    {
    title:'Buy Bread',
    isDone:false,
},{
    title:'Go to Gym',
    isDone:false,
},

{
    title:'Record youtube videos',
    isDone:true,
}]

// const index=newTodos.findIndex(function(todo,index){
//     console.log(todo);
//     return todo.title==='Go to Gym'

// })
// console.log(index);


const findTodo=function (myTodos,title){
    const index =myTodos.findIndex(function(todo,index)
    {
        return todo.title.toLowerCase()===title.toLowerCase();
    })
    
    return myTodos[index];
}

let printMe=findTodo(newTodos,'Go to gym')
console.log(printMe);