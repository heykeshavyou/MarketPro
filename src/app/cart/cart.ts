import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product-service';
import Product from '../Models/Product';
import { CommonModule } from '@angular/common';
import { Info } from "../Components/info/info";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, Info,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
    constructor(public ProductService:ProductService){
      
  }
  ngOnInit(): void {
    this.ProductService.GetCartItem();
    this.ProductService.GetCartTotal();
  }
}
