import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.apiUrl);
  }

  createPosts(post: any) {
    return this.http.post(this.apiUrl, JSON.stringify(post));
  }

  updatePosts(post: any) {
    return this.http.put(this.apiUrl + '/' + post.id, JSON.stringify(post));
  }

  deletePosts(post: any) {
    return this.http.delete(this.apiUrl + '/' + post.id);
  }
}
