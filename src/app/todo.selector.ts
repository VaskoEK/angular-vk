import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "./app.component";

export const selectTodoState = createFeatureSelector<Todo[]>('todos');  // createFeatureSelector: Strore-ból milyen típusú elemeket válasszon ki (Todo[])

export const selectTodos = createSelector(
    selectTodoState,
    (todos) => todos  // state-ből az összes todo-t adjuk vissza
);

export const selectCompleteTodos = createSelector(
    selectTodoState,
    (todos) => todos.filter(todo => todo.completed)
);

export const selectInCompleteTodos = createSelector(
    selectTodoState,
    (todos) => todos.filter(todo => !todo.completed)
);