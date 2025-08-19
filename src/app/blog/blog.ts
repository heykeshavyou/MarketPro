import { Component } from '@angular/core';
import { BreadCrumb } from '../Components/bread-crumb/bread-crumb';
import { Info } from "../Components/info/info";
import { ProductService } from '../Services/product-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [BreadCrumb, Info, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  constructor(public productService:ProductService,public router:Router) {
    
  }
  iteration= Array(6).fill(0);
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
  Comments=[
    {
      name:"Marvin McKinney",
      msg:"In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.",
      img:"/comment-img1.png"
    },
    {
      name:"Kristin Watson",
      msg:"Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed scelerisque, est eget aliquam venenatis, est sem tempor eros.",
      img:"/comment-img2.png"
    },
    {
      name:"Jenny Wilson",
      msg:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      img:"/comment-img3.png"
    },
    {
      name:"Robert Fox",
      msg:"Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, volutpat imperdiet ex.",
      img:"/comment-img4.png"
    },
    {
      name:"Pane",
      msg:"In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.",
      img:"/comment-img5.png"
    },
  ];
}
