import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-brands',
  imports: [SlickCarouselModule, RouterLink],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands {
  Img = [
    'brand-img2.png',
    'brand-img3.png',
    'brand-img4.png',
    'brand-img5.png',
    'brand-img6.png',
    'brand-img7.png',
    'brand-img8.png',
  ];
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
    autoplaySpeed: 2000,
  };
}
