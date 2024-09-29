/* eslint-disable no-unused-vars */
import { createContext,useContext } from "react";

export const TodoContext = createContext({
        todos:[
                {
                    id:1,
                    todo:"Todo List",
                    completed : false,
                },
            ],
            addTodo : (todo)=>{},
            deleteTodo : (id)=>{},
            updateTodo : (id)=>{},
            strikeOutTask : (id)=>{}
    });



export const useTodoContext = ()=>{
    return useContext(TodoContext);
}


export const TodoProvider = TodoContext.Provider;
