import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product-service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import Product from '../../Models/Product';
@Component({
  selector: 'app-flash-sale',
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './flash-sale.html',
  styleUrl: './flash-sale.css'
})
export class FlashSale implements OnInit{
  Product:Product[]=[];
  constructor(public ProductService:ProductService){

  }
  ngOnInit() {
    this.Product=this.ProductService.Products.filter(x=>x.OfferPrice<1000);
  }
    slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
    centerMode: false,
    variableWidth: true,
    speed: 300,
    autoplaySpeed: 3000,
  };
}
