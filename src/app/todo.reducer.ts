import { Todo } from "./app.component";
import { createReducer, on } from "@ngrx/store";
import { addTodo, deleteTodo, completeTodo, loadTodos, setTodos, incompleteTodo } from "./todo.actions";

export const initialState: Todo[] = [];  // def.-ni kell egy kezdeti állapotot

export const todoReducer = createReducer(  // összes action végrehajtását todoReducer-ben fogalmazzuk meg
    initialState,
    on(addTodo, (state, {todo}) => [...state, todo] ),  // state-et tartalmazó tömbhöz hozzáadom a todo-t
    on(setTodos, (_, {todos}) => todos),  // _ helyére state is írható (muszáj vmit megadni), de mivel nem használjuk, a _-t felismeri, => todos: írja felül a listát
    on(deleteTodo, (state, {id}) => state.filter(todo => todo.id !== id)),
    on(completeTodo, (state, {id}) => state.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,  // összes, a feltételnek megfelelt elemet beletesszük
                completed: true
            }
        }
        else {
            return todo;
        }
    })),
    on(incompleteTodo, (state, {id}) => state.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,  // összes, a feltételnek megfelelt elemet beletesszük
                completed: false
            }
        }
        else {
            return todo;
        }
    }))
)