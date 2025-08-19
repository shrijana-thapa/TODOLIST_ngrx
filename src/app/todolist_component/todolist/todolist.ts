import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask, removeTask,clearTodo } from '../../store/todolist.actions';
import { getTOdo } from '../../store/todolist.selectors';
import { todoState } from '../../store/todolist.state';

@Component({
  selector: 'app-todolist',
  standalone: false,
  templateUrl: './todolist.html',
  styleUrls: ['./todolist.scss']
})
export class Todolist {

   newTodo='';
  todos$ !: Observable<string[]>;

  constructor(private store:Store<{todos:todoState}>){
    this.todos$=this.store.select(getTOdo);
  }
 
  addTodo(){
  this.store.dispatch(addTask({todo:this.newTodo}));
  this.newTodo='';

  }

  clearTodo(){
    this.store.dispatch(clearTodo());
  }

removeTodo(index:number){
 this.store.dispatch(removeTask({index}))
}

}
