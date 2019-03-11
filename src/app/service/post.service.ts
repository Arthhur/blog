import { Injectable } from '@angular/core';
import { Post } from '../post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
    {
      id : 1,
      title : 'Le Roi Lion',
      content : 'L\'histoire de Simba',
      loveIts : 0,
      createdAt : new Date(1994, 11, 23)
    },
    {
      id : 2,
      title : 'Tarzan',
      content : 'L\'histoire de Tarzan',
      loveIts : 0,
      createdAt : new Date(1999, 11, 24)
    },
    {
      id : 3,
      title : 'Hercule',
      content : 'L\'histoire d\'un demi-dieu',
      loveIts : 0,
      createdAt : new Date(1997, 6, 27)
    },
  ] ;

  postSubject = new Subject<Post[]>() ;

  constructor() { }

  emitPostSubject() {
    this.postSubject.next(this.posts) ;
  }

  addPost(post: Post) {
    this.posts.push(post) ;
    this.emitPostSubject() ;
  }

  deletePost(post: Post) {
    const postIndexToDelete = this.posts.findIndex(
      (post1) => {
        if (post1 === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToDelete, 1);
    this.emitPostSubject();
  }

  addLike(id: number) {
    const idPost = this.posts.findIndex(
      (post1) => {
        if (post1.id === id) {
          return true;
        }
      }
    );

    this.posts[idPost].loveIts ++ ;
  }

  addDislike(id: number) {
    const idPost = this.posts.findIndex(
      (post1) => {
        if (post1.id === id) {
          return true;
        }
      }
    );

    this.posts[idPost].loveIts -- ;
  }

  getLastId(): number {
    return this.posts[this.posts.length - 1].id ;
  }


}
