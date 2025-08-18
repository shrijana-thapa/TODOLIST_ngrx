import { createReducer, on } from "@ngrx/store";
import { initialTodoState } from "./todolist.state";
import { addTask ,removeTask} from "./todolist.actions";

export const todoReducer=createReducer(initialTodoState,on(addTask,(state,{todo})=>{
return{
  ...state,
  taskToDo:[...state.taskToDo,todo]
}}

),
on(removeTask,(state,{index})=>{
  return{
    ...state,
    taskToDo:state.taskToDo.filter((_,i)=>
     (i!==index)
    )

}}
));