import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post/post.service';
import { Post, PostResponse } from 'src/app/core/types/post/post.type';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  loading: boolean = false;
  posts: Post[] = [];
  errorMsg: string = '';

  constructor(private postService: PostService, private router: Router) {}

  // ngOnInit(): void {
  //   this.postService.getAllPosts().subscribe((posts: PostResponse) => {
  //     console.log(posts);
      
  //   })
  // }
  // VAGY EZ:

  ngOnInit(): void {
    // this.postService.getAllPosts();

    // this.postService.posts$.subscribe((posts: Post[]) => {
    //   console.log(posts);
      
    // });
    this.init();
  }
    
  private init() {
    //API

    this.loading = true;
    
    this.postService.getAllPostsToComponent().subscribe({
      next: (response: PostResponse) => {
        this.posts = response.posts;
        this.loading = false;
      },  // komp.-en belüli hibakez.: feliratkozásba belerakunk egy error ágat is:
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.loading = false;
        this.errorMsg = err.message;  // hiba típusát jel. meg
      }
    })
    

    //API
    /* this.postService.getAllPosts();
    //SUBS
    this.postService.posts$.subscribe((posts: Post[] | null) => {
      console.log(posts);
      if (posts !== null) {  // ha nem null az érték, vagyis postok vagy üres tömb jön vissza
        this.loading = false;
        this.posts = posts;  // beletesszük a feliratkozásba a jövő értéket, ha az nem null
      }
      else {
        this.loading = true;
      }
      // this.loading = posts === null;  // ha null, akkor lépjen életbe a loading

    }) */
    
  }

  editPost(post: Post) {
    
    this.router.navigate(['post', post.id]);
  }
    
  

}
