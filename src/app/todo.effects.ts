import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { loadTodos, addTodo, deleteTodo, setTodos, addTodoAfterApi, deleteTodoAfterApi, completeTodo, completeTodoAfterApi, incompleteTodoAfterApi, incompleteTodo } from './todo.actions';
import { TodoService } from './todo.service';
import { Todo } from './app.component';



@Injectable()
export class TodoEffects {

    loadTodos$ = createEffect(() => 
        this.actions$.pipe(  // this.actions$.pipe: összes actionre figyel
            ofType(loadTodos),  // ofType: milyen actionökre szeretnék figyelni, amikor ez lefut (most loadTodos-ra), a lentit szeretném csin.
            switchMap(() =>
             this.todoService.getTodos().pipe(
                    switchMap((todos: Todo[]) => [  // switchMap: eredmény nem itt marad, hanem egyel fentebb megy
                        setTodos({todos})
                    ])
                )
            )
        )
    );

    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTodo),
            switchMap(({ todo }) =>
                this.todoService.addTodo(todo).pipe(
                    switchMap((todo: Todo) => [
                        addTodoAfterApi({ todo: todo })
                    ])
                )
            )
        )
    );


    deleteTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteTodo),
            switchMap(({ id }) =>
                this.todoService.deleteTodoById(id).pipe(
                    switchMap((todo: Todo) => [
                        deleteTodoAfterApi({ id })
                    ])
                )
            )
        )
    );


    completeTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(completeTodo),
            switchMap(({ id }) =>
                this.todoService.completeTodoById(id).pipe(
                    switchMap((todo: Todo) => [
                        completeTodoAfterApi({ id })
                    ])
                )
            )
        )
    );


    incompleteTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(incompleteTodo),
            switchMap(({ id }) =>
                this.todoService.incompleteTodoById(id).pipe(
                    switchMap((todo: Todo) => [
                        incompleteTodoAfterApi({ id })
                    ])
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ){}

}