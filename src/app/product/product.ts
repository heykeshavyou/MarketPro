import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductDetail from '../Models/Product';
import { ProductService } from '../Services/product-service';
import { CommonModule } from '@angular/common';
import { TimerService } from '../Services/timer-service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  id: number = 0;
  product:ProductDetail|undefined={} as ProductDetail;
  constructor(private route: ActivatedRoute,public productService:ProductService,public timer:TimerService) {}
  ngOnInit() {
    this.route.params.subscribe((item) => {
      this.id = item['id'];
    });
    this.product= this.productService.Products.find(x=>x.Id==this.id);
    console.log(this.product);
  }
}
