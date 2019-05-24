import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

interface Topost {
  title: string;
  thought: string;
}

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {

  show:boolean = false;

  post: Topost [] = [ 
    {
    title: "Dog",
    thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mollis"
   },
   {
   title: "Cat",
   thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mollis"
  },
  {
    title: "Pig",
    thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mollis"
  },
  {
    title: "Cow",
    thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mollis"
  },
  {
    title: "Whale",
    thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mollis"
  }];

  onSubmit(event) {
    this.post.unshift(post);
    this.show = false;
  }
  toggleForm(): void{
    this.show = !this.show;
  }

  constructor() { }

  addPost(post: string): void {
    this.post.push(post)
  }
  removePost(post: string): void {
    this.post.slice(index, 1);
  }
  
  


