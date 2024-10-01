import { useState } from "react";
import { useTodoContext } from "../Contexts/TodoContext";
function TodoForm() {
    const [todo,setTodos] = useState("");//this state is to give the todo object after adding all the info from input field
    const {addTodo} = useTodoContext();//add function to return the data to the context .
    const add = (e)=>{
        e.preventDefault();
        if(!todo) return false;
        addTodo({todo,completed:false})
        setTodos("");
    }
  return (
    <form onSubmit={add} className="flex">
    <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e)=>setTodos(e.target.value)}
        value = {todo}
    />
    <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
    </button>
</form>
  )
}

export default TodoForm