import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product-service';
import Product from '../../Models/Product';
import { TimerService } from '../../Services/timer-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offers',
  imports: [CommonModule, RouterLink],
  templateUrl: './offers.html',
  styleUrl: './offers.css'
})
export class Offers implements OnInit {
  Products:Product[]=[];
  constructor(private _productService:ProductService,public Timer:TimerService){

  }
  ngOnInit(): void {
    this.Products.push(this._productService.Products[4]);
    this.Products.push(this._productService.Products[21]);
  }
  
}
