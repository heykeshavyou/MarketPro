import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../Services/product-service';
import Product from '../Models/Product';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadCrumb } from "../Components/bread-crumb/bread-crumb";

@Component({
  selector: 'app-shop',
  imports: [RouterLink, CommonModule, BreadCrumb],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit {
  ProductList: Product[] = [];
  CardChanger = signal(false);
  sortValue=signal(1);
  constructor(
    public productService: ProductService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._route.paramMap.subscribe((item) => {
      const id=item.get('id');
      if (item.get('id') === null) {
        this.ProductList = this.productService.Products.sort(
          (a, b) => b.RatingCount - a.RatingCount
        );
      } else {
        this.ProductList = this.productService.Products.filter(
          (x) => x.CategoryId == Number(id)
        ).sort((a, b) => b.RatingCount - a.RatingCount);
      }
      this.sortValue.set(1);
    });
  }
  OnSort(data: Event) {
    let sort = data.target as HTMLInputElement;
    switch (parseInt(sort.value)) {
      case 1:
        this.ProductList.sort((a, b) => b.RatingCount - a.RatingCount);
        break;
      case 2:
        this.ProductList.sort((a, b) => a.OfferPrice - b.OfferPrice);
        break;
      case 3:
        this.ProductList.sort((a, b) => b.OfferPrice - a.OfferPrice);
        break;
    }
  }
  FilterColorList = [
    { name: 'Black', color: 'accent-black' },
    { name: 'Red', color: 'accent-red-500' },
    { name: 'Orange', color: 'accent-orange-500' },
    { name: 'Yellow', color: 'accent-yellow-500' },
    { name: 'Blue', color: 'accent-blue-500' },
    { name: 'Green', color: 'accent-green-500' },
    { name: 'Fuchsia', color: 'accent-fuchsia-500' },
  ];
  FilterByBrandList = [
    'Apple',
    'Samsung',
    'Microsoft',
    'HP',
    'Redmi',
    'Nothing',
    'Boat',
  ];
  Filter = signal(false);
  FilterClass = 'invisible opacity-0 translate-y-10';
  SetHeader() {
    this.FilterClass = this.Filter()
      ? 'visible opacity-100 translate-y-0'
      : 'invisible opacity-0 translate-y-10';
    this.Filter.set(!this.Filter());
  }
  Count=signal(1);
  arraynumber=Array.from({ length: 5 }, (_, i) => i + 1);
}
