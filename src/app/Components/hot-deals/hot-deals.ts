import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../Services/timer-service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../Services/product-service';
import Product from '../../Models/Product';
import { ProductCard } from "../ProductCard";
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-hot-deals',
  imports: [SlickCarouselModule,CommonModule, ProductCard],
  templateUrl: './hot-deals.html',
  styleUrl: './hot-deals.css'
})
export class HotDeals implements OnInit {
  Products:Product[]=[];
  constructor(public Timer:TimerService,private productService:ProductService){

  }
  ngOnInit(): void {
    this.Products=this.productService.Products.filter(x=>x.CategoryId==4);
  }
      slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
    centerMode: false,
    variableWidth: true,
    speed: 300,
    pauseOnHover: true,
    autoplaySpeed: 3000,
  };
}
