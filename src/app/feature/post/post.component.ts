import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PostService } from 'src/app/core/services/post/post.service';
import { Post } from 'src/app/core/types/post/post.type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  id: number = -1;
  post: Post | null = null;
  private unsubscribe = new Subject<void>();  // leiratkozáshoz vesszük fel, nem fog semmilyen értéket visszaadni, .pipe() is kell!

  constructor(private postService: PostService, private actRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    console.log("destroy");
    this.unsubscribe.next();  // beletesszük a semmit
    this.unsubscribe.complete();  // jelzés az rxjes-nek és az Observable-nek, hogy az unsubscribe elnev. Observable-ön belül nem lesz több mód./nem lesz új érték
  }

  ngOnInit(): void {
    // this.actRoute.snapshot: url aktuális állapota
    this.id = this.actRoute.snapshot.params['id'];  // 'id' nevet adtuk az app-routing.module-ban: path: 'post/:id', ezt berakjuk az id változóba

    this.postService.posts$.pipe(takeUntil(this.unsubscribe)).subscribe((posts: Post[] | null) => {
      const post = this.postService.getSinglePostById(this.id);
    if (post === null) {
      console.log("postok lekérése");
      
      this.postService.getAllPosts()
    }
    else if (post === undefined) {
      alert("NINCS ILYEN POST");
    }
    else {
      console.log("post beállítás");
      this.post = post;
    }
    })

    // VAN API 1 DB LEKÉRDEZÉSRE
    this.postService.getSinglePost(this.id).subscribe((post: Post) => {
      // this.post = post;
    });

    // NINCS API, CSAK AZ ÖSSZES LEKÉRDEZÉSÉRE
    
    
  }
}
