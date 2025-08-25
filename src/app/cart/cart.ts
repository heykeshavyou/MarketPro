import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product-service';
import Product from '../Models/Product';
import { CommonModule } from '@angular/common';
import { Info } from "../Components/info/info";
import { RouterLink } from '@angular/router';
import { BreadCrumb } from "../Components/bread-crumb/bread-crumb";

@Component({
  selector: 'app-cart',
  imports: [CommonModule, Info, RouterLink, BreadCrumb],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
    constructor(public ProductService:ProductService){
      
  }
  ngOnInit(): void {
    this.ProductService.GetCartTotal();
  }
}
