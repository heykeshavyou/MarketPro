import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-banner',
  imports: [SlickCarouselModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  slides = [
  { img: "/Category1.jpeg" },
  { img: "/Category2.jpeg" },
  { img: "/Category3.jpeg" }
];  
    slideConfig = {
      dots: false,
      autoplay: true,
      initialSlide: 3,
      infinite: true,
      autoplaySpeed: 10000,
  };
}
