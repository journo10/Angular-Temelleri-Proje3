import { PostService } from './../services/post.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.postService.getPosts()
      .subscribe((response) => (this.posts = <[any]>response));
  }

  getCreatePost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';

    this.postService.createPosts(post).subscribe((response) => {
      this.posts.id = response;
      this.posts.splice(0, 0, post);
    });
  }

  getUpdatePost(post: any) {
    post.title = 'Güncellendi';
    this.postService.updatePosts(post).subscribe((response) => {
      console.log(response);
    });
  }

  getDeletePost(post: any) {
    this.postService.deletePosts(post).subscribe((response) => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
