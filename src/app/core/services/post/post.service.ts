import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Post, PostResponse } from '../../types/post/post.type';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpService: HttpService) { }

  // getAllPosts(): Observable<PostResponse> {
  //   return this.httpService.getAllPosts();
  // }
  // VAGY EZ:

  // új Observable létrehozása, hogy ne kapjunk vissza minden adatot, amit a PostResponse tartalmaz, csak a Post[]-öt:
  private posts = new BehaviorSubject<Post[] | null>(null);  // ez val. meg az rxjs-ből az Observable-t
  posts$ = this.posts.asObservable();  // ez egy rxjs-es Observable, amire fel lehet iratkozni

  getAllPosts(): void {
    this.httpService.getAllPosts().subscribe((response: PostResponse) => {
      this.posts.next(response.posts);
    });
  }

  getAllPostsToComponent(): Observable<PostResponse> {
    return this.httpService.getAllPosts();
  }

  // milyen id-jú postot akarunk letölteni
  getSinglePostById(id: number): Post | null | undefined {
    if (this.posts.value !== null) {
      return this.posts.value.find((post) => post.id == id);
    }
    else {
      return this.posts.value;
    }
  }

  getSinglePost(id: number): Observable<Post> {
    return this.httpService.getSinglePost(id);
  }

}
