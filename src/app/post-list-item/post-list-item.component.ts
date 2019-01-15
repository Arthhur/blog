import { Component,Input, OnInit } from '@angular/core';
import { Post }  from '../post' ;

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() selectedPost: Post ;

  constructor() { }

  ngOnInit() {
  }

  addLike() {
    this.selectedPost.loveIts++ ;
    console.log(this.selectedPost.loveIts) ;
  }

  addDislike() {
    this.selectedPost.loveIts-- ;
    console.log(this.selectedPost.loveIts) ;
  }

}
