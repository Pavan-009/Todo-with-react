/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTodoContext } from "../Contexts/TodoContext";
function TodoItem({todoItem}) {
    const [isEditable,setIsEditable] = useState(false);// state for checking the editable or not
    const [todoMsg,setTodoMsg]  = useState(todoItem.todo);//to do message that we are giving in input field given to state
    const {strikeOutTask,deleteTodo,updateTodo} = useTodoContext(); // all the usable functions 

    const editTodo = ()=>{ // this regurn the todo Object and the state weather it is editable or not
        updateTodo(todoItem.id,{...todoItem,todo: todoMsg});
        setIsEditable(false);
    }

    const strikeOutTaskMark = ()=>{ // this gives strikeOut the txt when the task is completed [it is to toggle the checkbox]
            strikeOutTask(todoItem.id);
    }
  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todoItem.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
    }`}
>
    <input
        type="checkbox"
        className="cursor-pointer"
        checked={todoItem.completed}
        onChange={strikeOutTaskMark}    
    />
    <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
            isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todoItem.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
    />
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
            if (todoItem.completed) return;

            if (isEditable) {
                editTodo();
            } 
            else{
             setIsEditable((prev) => !prev);
            }
        }}
        disabled={todoItem.completed}
    >
        {isEditable ? "📁" : "✏️"}
    </button>
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todoItem.id)}
    >
        ❌
    </button>
</div>
  )
}

export default TodoItem