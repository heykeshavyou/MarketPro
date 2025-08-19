import { Component, OnInit, Sanitizer, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductDetail from '../Models/Product';
import { ProductService } from '../Services/product-service';
import { CommonModule } from '@angular/common';
import { TimerService } from '../Services/timer-service';
import { Info } from '../Components/info/info';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { FlashSale } from '../Components/flash-sale/flash-sale';
import { NewsLetter } from "../Components/news-letter/news-letter";
import { BreadCrumb } from "../Components/bread-crumb/bread-crumb";

@Component({
  selector: 'app-product',
  imports: [CommonModule, Info, FlashSale, NewsLetter, BreadCrumb],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  IsDes = signal(true);
  id = signal(0);
  product: ProductDetail | undefined = {} as ProductDetail;
  ServiceDetails = [
    {
      name: 'Fast Delivery',
      msg: 'Lightning-fast shipping, guaranteed.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="#1c799b" class="bi bi-truck" viewBox="0 0 16 16">  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>',
    },
    {
      name: 'Free 90-day returns',
      msg: 'Shop risk-free with easy returns.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="#1c799b" class="bi bi-arrow-return-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/></svg>',
    },
    {
      name: 'Pickup available at Shop location',
      msg: 'Usually ready in 24 hours',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="#1c799b" class="bi bi-check-circle-fill" viewBox="0 0 16 16">  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>',
    },
    {
      name: 'Payment',
      msg: 'Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="#1c799b" class="bi bi-credit-card-fill" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"/></svg>',
    },
    {
      name: 'Warranty',
      msg: 'The Consumer Protection Act does not provide for the return of this product of proper quality.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="#1c799b" class="bi bi-check-circle-fill" viewBox="0 0 16 16">  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>',
    },
    {
      name: 'Packaging',
      msg: 'Research & development value proposition graphical user interface investor.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="#1c799b" class="bi bi-box-seam" viewBox="0 0 16 16">  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/></svg>',
    },
  ];
  constructor(
    private route: ActivatedRoute,
    public productService: ProductService,
    public timer: TimerService,
    public sanitizer: DomSanitizer,
    private _titleService:Title
  ) {}
  ngOnInit() {
    this.route.params.subscribe((item) => {
      const id = Number(item['id']);
      this.id.set(id);
      this.product = this.productService.Products.find(
        (x) => x.Id == this.id()
      );
      this._titleService.setTitle(this.product?.Name??"");
    });
  }

  ClassDefine(id: number) {
    if (this.productService.AvailableInWishlist(id)) {
      return 'text-white bg-[#1c799b] ';
    }
    return 'text-[#1c799b] bg-[#e3f4fA]';
  }
}
