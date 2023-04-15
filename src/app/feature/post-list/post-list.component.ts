import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PostService } from 'src/app/core/services/post/post.service';
import { PostResponse } from 'src/app/core/types/post/post.type';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // posts$: Observable<PostResponse> | null= null;
  posts$: Observable<PostResponse> = new Subject();  // üres Observ., amelybe elmentjük a lekért adatot lentebb

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.init();
  }

  init():void {
    this.posts$ = this.postService.getAllPostsToComponent();
    //console.log(" posts$: ", this.posts$);  // nincs benne semmi, mert később érkezik vissza az api kérés válasza
  }

  openPost(id:number){
    console.log(id);
  }
  
}
