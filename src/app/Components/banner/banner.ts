import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-banner',
  imports: [SlickCarouselModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  constructor(private router:Router){

  }
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
scrollToElement(elementId: string) {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
}
