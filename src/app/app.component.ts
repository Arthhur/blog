import { Component } from '@angular/core';
import {Post} from './post' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my Blog';
}

let createdDate = new Date() ;

export const POSTS: Post[] = [
  {
    title : "Le Roi Lion",
    content : "L'histoire de Simba",
    loveIts : 0,
    createdAt : createdDate
  },
  {
    title : "Tarzan",
    content : "L'histoire de Tarzan",
    loveIts : 0,
    createdAt : createdDate
  },
  {
    title : "Hercule",
    content : "L'histoire d'un demi-dieu",
    loveIts : 0,
    createdAt : createdDate
  },
] ;
