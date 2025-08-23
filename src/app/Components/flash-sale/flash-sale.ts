import { Component, Input, OnInit, signal } from '@angular/core';
import { ProductService } from '../../Services/product-service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import Product from '../../Models/Product';
import { ProductCard } from "../ProductCard";
@Component({
  selector: 'app-flash-sale',
  imports: [SlickCarouselModule, CommonModule, ProductCard],
  templateUrl: './flash-sale.html',
  styleUrl: './flash-sale.css'
})
export class FlashSale implements OnInit{
  @Input() TitleHead="";
  @Input() ProductId=0;
  Product:Product[]=[];
  constructor(public ProductService:ProductService){

  }
  ngOnInit() {
    this.Product=this.ProductService.Products.filter(x=>x.OfferPrice<1000&&x.Id!=this.ProductId);
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
