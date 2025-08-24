import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product-service';
import Product from '../../Models/Product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TimerService } from '../../Services/timer-service';

@Component({
  selector: 'app-daily-best-sells',
  imports: [CommonModule,RouterLink],
  templateUrl: './daily-best-sells.html',
  styleUrl: './daily-best-sells.css'
})
export class DailyBestSells implements OnInit {
  Products:Product[]=[];
  constructor(public ProductService:ProductService,public Timer:TimerService){
  }
  ngOnInit(): void {
    this.Products=this.ProductService.Products.filter(x=>x.CategoryId==4).sort((a, b) => b.RatingCount - a.RatingCount).slice(0,4);
  }
  
}
