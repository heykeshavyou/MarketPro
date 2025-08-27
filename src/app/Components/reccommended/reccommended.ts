import { Component, signal } from '@angular/core';
import { ProductService } from '../../Services/product-service';
import Category from '../../Models/Category';
import { CommonModule } from '@angular/common';
import Product from '../../Models/Product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reccommended',
  imports: [CommonModule, RouterLink],
  templateUrl: './reccommended.html',
  styleUrl: './reccommended.css',
})
export class Reccommended {
  Categories: Category[] = [];
  SelectedCategory = signal(0);
  Products: Product[] = [];
  constructor(public ProductService: ProductService) {
    this.Categories = ProductService.Categories;
    this.Products = ProductService.Products.filter((x) => x.Id <= 12);
  }
  ChangeProducts(id: number) {
    this.SelectedCategory.set(id);
    if (id != 0) {
      this.Products = this.ProductService.Products.filter(
        (x) => x.CategoryId == id
      );
    } else {
      this.Products = this.ProductService.Products.filter((x) => x.Id <= 12);
    }
  }
}
