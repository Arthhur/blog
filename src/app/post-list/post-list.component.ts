import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post' ;
import { Subscription } from 'rxjs';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [] ;
  postSubscription: Subscription ;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (data: Post[]) => {
        this.posts = data ;
      }
    ) ;
    this.postService.emitPostSubject() ;
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe() ;
  }

}
