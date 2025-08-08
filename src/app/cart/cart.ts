import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product-service';
import Product from '../Models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
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
