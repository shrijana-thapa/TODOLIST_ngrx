import { createFeatureSelector, createSelector } from "@ngrx/store";
import { todoState } from "./todolist.state";

export const selectTodoState=createFeatureSelector<todoState>('todos');
export const getTOdo=createSelector(selectTodoState,(state:todoState)=>
state.taskToDo
)