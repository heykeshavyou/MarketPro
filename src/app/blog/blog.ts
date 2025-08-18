import { Component } from '@angular/core';
import { BreadCrumb } from '../Components/bread-crumb/bread-crumb';

@Component({
  selector: 'app-blog',
  imports: [BreadCrumb],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  Posts = [
    {
      title: 'Once determined you need to come up with a name',
      img: 'recent-post1.png',
    },
    {
      title: 'Another post title goes here',
      img: 'recent-post2.png',
    },
    {
      title: 'Interesting article title here',
      img: 'recent-post3.png',
    },
    {
      title: 'Useful info in this blog post',
      img: 'recent-post4.png',
    },
  ];
}
