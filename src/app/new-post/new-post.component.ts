import { Component, OnInit } from '@angular/core';
import { PostService } from './../service/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  userForm: FormGroup ;

  constructor(private postService: PostService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm() ;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      title : ['', Validators.required],
      content : ['', Validators.required],
      createdAt : ['', Validators.required],
    }) ;
  }

  onSubmitForm() {
    let post: Post ;
    const formValue = this.userForm.value;
    const title = formValue['title'] ;
    const content = formValue['content'] ;
    const createdAt = formValue['createdAt'] ;

    post = {
      id : this.postService.getLastId(),
      title : title,
      content : content,
      loveIts : 0,
      createdAt : createdAt
    } ;

    this.postService.addPost(post);
    this.router.navigate(['/post']);
  }

}
