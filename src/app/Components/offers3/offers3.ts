import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product-service';
import Product from '../../Models/Product';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';
import { TimerService } from '../../Services/timer-service';

@Component({
  selector: 'app-offers3',
  imports: [CommonModule, SlickCarouselModule,RouterLink],
  templateUrl: './offers3.html',
  styleUrl: './offers3.css',
})
export class Offers3 implements OnInit {
  ProductsCategory: { Heading: string; Products: Product[] }[] = [];
  DealProduct:Product|null=null;
  constructor(public ProductService: ProductService, public Timer:TimerService) {}
  ngOnInit(): void {
    this.ProductsCategory = [
      {
        Heading: 'Featured Products',
        Products: this.ProductService.Products.filter(
          (x) => x.OfferPrice > x.Price / 2
        ).slice(0, 4),
      },
      {
        Heading: 'Top Selling Products',
        Products: this.ProductService.Products.filter(
          (x) => x.RatingCount > 400
        ).slice(0, 4),
      },
      {
        Heading: 'On-sale Products',
        Products: this.ProductService.Products.filter(
          (x) => x.OfferPrice < 300
        ).slice(0, 4),
      },
    ];
    this.DealProduct=this.ProductService.Products[39];
  }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
    speed: 300,
    pauseOnHover: true,
    autoplaySpeed: 3000,
  };
}
