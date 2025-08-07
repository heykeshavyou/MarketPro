import { Component } from '@angular/core';
import { ProductService } from '../../Services/product-service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [SlickCarouselModule,CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  constructor(public ProductService: ProductService) {}
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase:'ease-out',
    autoplay:true,
    arrows:false,
          centerMode: false,
      variableWidth: true,
      speed: 300,
      autoplaySpeed:3000
  };
}
