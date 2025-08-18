import { Component } from '@angular/core';
import { ProductService } from '../Services/product-service';
import { CommonModule } from '@angular/common';
import { Info } from "../Components/info/info";
import { RouterLink } from '@angular/router';
import { BreadCrumb } from "../Components/bread-crumb/bread-crumb";

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule, Info, RouterLink, BreadCrumb],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class Wishlist {

  constructor(public ProductService:ProductService) {
    
  }
}
