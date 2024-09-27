import { useEffect, useState } from 'react';
import './App.css'
import { TodoProvider } from './Contexts/TodoContext';
function App() {

  const [todo,setTodos] = useState([]);

  //let {todo,addTodo,deleteTodo,updateTodo,strikeOutTask}  = useTodoContext;

  const addTodo = (todo)=>{
    setTodos((prev)=>{
      [{id:Date.now,...todo},...prev]
    })
  }

  const updateTodo = (todo)=>{
     setTodos((prev)=>{
        prev.id === todo.id ? todo : prev
     })
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>{
      prev.filter((ele)=>{
        ele.id != id 
      })
    })
  }

  const strikeOutTask = (id)=>{
    setTodos((prev)=>{
      prev.map((ele)=>{
        ele.id === id ? {...prev,completed : !prev.completed } : prev
      })
    })
  }

  useEffect(()=>{

    const todos = JSON.parse(localStorage.getItem("todos"));

   if(todos && todos.length){

    setTodos(todos)

   }

  },[]);

  useEffect(()=>{

    localStorage.setItem("Item",JSON.stringify(todo))

  },[todo])

  return (
    <TodoProvider value={{todo,addTodo,deleteTodo,updateTodo,strikeOutTask}}>
    <h1 className="text-3xl text-green-500 font-bold underline">
    Hello world!
  </h1>
    </TodoProvider>
  )
}

export default App
