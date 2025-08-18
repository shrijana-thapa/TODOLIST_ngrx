import { createAction, props } from "@ngrx/store";

export const addTask=createAction('addTask',props<{todo:string}>());
export const removeTask=createAction('removeTask',props<{index:number}>());

