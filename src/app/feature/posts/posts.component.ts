import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post/post.service';
import { Post, PostResponse } from 'src/app/core/types/post/post.type';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'body', 'tags'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort =  new MatSort();

  loading: boolean = false;
  posts: Post[] = [];
  errorMsg: string = '';

  constructor(private postService: PostService, private router: Router) {

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.posts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    
  private init() {
    //API

    this.loading = true;
    
    this.postService.getAllPostsToComponent().subscribe({
      next: (response: PostResponse) => {
        this.posts = response.posts;
        this.dataSource = new MatTableDataSource(this.posts);
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
