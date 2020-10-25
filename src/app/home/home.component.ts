import { Component, OnInit } from '@angular/core';
import { Post } from 'src/assets/types';
import { posts } from '../../assets/posts-fixture';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor() {}

  ngOnInit(): void {
    this.posts = posts;
  }

  addPost(): void {
    console.log('clicked');
  }
}
