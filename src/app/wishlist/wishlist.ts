import { Component } from '@angular/core';
import { ProductService } from '../Services/product-service';
import { CommonModule } from '@angular/common';
import { Info } from "../Components/info/info";

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule, Info],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class Wishlist {

  constructor(public ProductService:ProductService) {
    
  }
}
