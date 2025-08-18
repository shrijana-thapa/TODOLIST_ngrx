import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todolist } from './todolist';

const routes: Routes = [
  {
    path:'',component:Todolist
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodolistRoutingModule { }
