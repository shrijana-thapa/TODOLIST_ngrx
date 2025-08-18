import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing-module';
import { Todolist } from './todolist';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../../store/todolist.reducer';
import {  RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [Todolist],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    CommonModule,FormsModule,
    StoreModule.forRoot({todos:todoReducer}),
      RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
  
  ],

})
export class TodolistModule { }
