import { Component } from '@angular/core';
import { BreadCrumb } from '../Components/bread-crumb/bread-crumb';
import { Info } from "../Components/info/info";
import { ProductService } from '../Services/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [BreadCrumb, Info, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  constructor(public productService:ProductService) {
    
  }
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
