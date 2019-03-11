import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post' ;
import { PostService } from './../service/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() selectedPost: Post ;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onAddLike() {
    this.postService.addLike(this.selectedPost.id) ;
  }

  onAddDislike() {
    this.postService.addDislike(this.selectedPost.id) ;
  }

  onDeletePost() {
    this.postService.deletePost(this.selectedPost) ;
  }

}
