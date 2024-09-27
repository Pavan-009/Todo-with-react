import { createContext,useContext } from "react";

export const TodoContext = createContext(
    {
        todo:[
                {
                    id:1,
                    todo:"Todo List",
                    completed : false,
                }
            ],
            addTodo : (todo)=>{},
            deleteTodo : (id,todo)=>{},
            updateTodo : (id)=>{},
            strikeOutTask : (id)=>{}
    }
);

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = ()=>{
    return useContext(TodoContext);
}

