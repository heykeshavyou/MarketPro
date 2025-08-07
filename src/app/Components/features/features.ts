import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {
  PromotionalBanner=[
    {title:"Everyday Fresh Milk",price:399,route:"/1",img:"bg-[url(/promotional-banner-img1.png)]"},
    {title:"Everyday Fresh Fruits",price:349,route:"/1",img:"bg-[url(/promotional-banner-img3.png)]"},
    {title:"Everyday Fresh Bread",price:299,route:"/1",img:"bg-[url(/promotional-banner-img4.png)]"},
    {title:"Everyday Fresh Meat",price:599,route:"/1",img:"bg-[url(/promotional-banner-img2.png)]"},
  ];
}
