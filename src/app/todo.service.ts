import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Todo } from "./app.component";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http: HttpClient){}

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.apiUrl);
    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.apiUrl, todo);
    }

    deleteTodoById(id: number): Observable<any> {
        const url = this.apiUrl + '/' + id;
        return this.http.delete(url);
    }

    // private todos: Todo[] = [  // most ide írjuk, de amúgy api adja vissza
    //     {
    //         id: 1,
    //         title: 'Mosogatás',
    //         completed: false
    //     },
    //     {
    //         id: 2,
    //         title: 'Bevásárlás',
    //         completed: true
    //     },
    //     {
    //         id: 3,
    //         title: 'Mosás',
    //         completed: false
    //     },
    //     {
    //         id: 4,
    //         title: 'Kocsi takarítás',
    //         completed: true
    //     }
    // ]

    // getTodos(): Observable<Todo[]> {
    //     return of(this.todos);  // of: par.-ként megkapott változóból csinál egy ugyanolyan típusú Obs.-t
    // }
}