import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, deleteTodo, loadTodos } from './todo.actions';
import { Observable } from 'rxjs';
import { selectCompleteTodos, selectInCompleteTodos } from './todo.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newTodo: string = "";
  completedTodos: Todo[] = [];
  incompleteTodos: Todo[] = [];
  todos$: Observable<Todo[]>;
  completedTodos$ : Observable<Todo[]>;
  inCompletedTodos$ : Observable<Todo[]>;

  constructor(private store: Store<{todos: Todo[]}>) {

    this.store.dispatch(loadTodos());

    this.todos$ = this.store.select((state) => state.todos);  // VAGY: this.todos$ = this.store.select(selectTodos);
    this.completedTodos$ = this.store.select(selectCompleteTodos);
    this.inCompletedTodos$ = this.store.select(selectInCompleteTodos);
  }

 

  onSubmit(event: Event): void {
    event.preventDefault();  // letiltjuk, h a submit gomb vmilyen post hívást létrehozzon
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: this.newTodo,
      completed: false
    }
    //NGRX
    this.store.dispatch(addTodo({ todo: newTodo}));
    this.newTodo = '';
  }

  deleteTodo(id: number): void {
    //NGRX
    this.store.dispatch(deleteTodo({id}));
  }
  
}



export type Todo = {
  id: number,
  title: string,
  completed: boolean
}
