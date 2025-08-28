import { Component, Input } from "@angular/core";
import Product from "../Models/Product";
import { ProductService } from "../Services/product-service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector:"Product-Card-2"  ,
  template:`  <div
    class="border-gray-300 product max-w-100 rounded-2xl border-1 hover:border-[#1c799b]"
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-once="true" >
    <div class="flex justify-between">
      @if(Product.OfferPrice<Product.Price/3){
      <div
        class="bg-red-600 rounded-tl-2xl h-min rounded-br-2xl p-1 text-white w-17 text-[14px] quicksand"
      >
        Hot Deal
      </div>
      }@else if (Product.OfferPrice<Product.Price/2) {
      <div
        class="bg-[#FF9F29] rounded-tl-2xl h-min rounded-br-2xl p-1 text-white w-17 text-[14px] quicksand"
      >
        Sale 50%
      </div>
      }@else if (Product.OfferPrice>Product.Price-100&& Product.OfferPrice<Product.Price) {
        <div
        class="bg-[#2563EB] rounded-tl-2xl h-min rounded-br-2xl p-1 text-white w-17 text-[14px] quicksand"
      >
        Best Sale
      </div>
      }
      @else{
      <div
        class="bg-white h-7.25 rounded-tl-2xl rounded-br-2xl p-1 text-white w-17 text-[14px] quicksand"
      ></div>
      }
      <div class="mt-5 mr-5">
        <button
          [ngClass]="{
            'text-white bg-[#1c799b]  ': ProductService.IsAlreadyInWishlist(
              Product.Id
            )
          }"
          (click)="ProductService.AddToWishlist(Product)"
          class="wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path
              d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="p-5">
      <a [routerLink]="['/product', Product.Id]">
        <div class="flex justify-center items-center">
          <img
            [src]="Product.Img"
            width="130"
            class="aspect-square object-contain transition-all duration-300"
          />
        </div>
        <div class="my-2 flex justify-start items-center">
          <p class="text-[12px] md:text-[16px] font-medium">
            {{ Product.OfferPrice | currency : "INR" }}
          </p>
          <p
            class="text-[12px] md:text-[16px] mx-3 font-medium text-gray-400 line-through"
          >
            {{ Product.Price | currency : "INR" }}
          </p>
        </div>
        <div class="text-[12px] font-bold text-gray-500 flex items-start">
          <span class="me-1 flex justify-center items-baseline gap-1"
            >{{ Product.Rating.toFixed(1) }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              fill="#f0b100"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              /></svg
          ></span>

          <span class="mx-1 flex justify-center items-center"
            >({{ Product.RatingCount }})</span
          >
        </div>
        <div>
          <p class="quicksand font-black my-2 hover:text-[#1c799b] truncate">
            {{ Product.Name }}
          </p>
        </div>
        <div class="h-1 bg-gray-300 rounded-full">
          <div
            class="bg-[#1c799b] h-[100%] rounded-full"
            [ngStyle]="{ width: Product.Quantity + '%' }"
          ></div>
        </div>
        <div class="mt-2 text-[12px] font-medium text-gray-700">
          Sold: {{ 100 - Product.Quantity }}/100
        </div>
      </a>
      <div class="mt-4">
        @if (ProductService.IsAlreadyInCart(Product.Id)) {
        <button
          class="bg-gray-300 text-[14px] justify-between flex items-center w-[100%] rounded-[5px] cursor-pointer transition-all duration-300 font-medium text-[#000]"
        >
          <button
            class="active:scale-110 hover:text-white hover:bg-[#1c799b] p-3 rounded-l-[5px]"
            (click)="ProductService.AddToCart(Product.Id, -1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"
              />
            </svg>
          </button>

          <span>{{ ProductService.GetCartProductQuantity(Product.Id) }}</span>
          <button
            class="hover:text-white active:scale-110 hover:bg-[#1c799b] p-3 rounded-r-[5px]"
            (click)="ProductService.AddToCart(Product.Id, 1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
              />
            </svg>
          </button>
        </button>
        }@else{
        <button
          (click)="ProductService.AddToCart(Product.Id, 1)"
          class="bg-gray-300 h-10 active:scale-110 text-[14px] justify-center flex items-center gap-2.5 w-[100%] rounded-[5px] cursor-pointer hover:bg-[#1c799b] hover:text-white transition-all duration-300 font-medium text-[#000] px-4 py-2"
        >
          <span>Add To Cart </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            />
          </svg>
        </button>
        }
      </div>
    </div>
  </div>`,
  imports:[CommonModule,RouterLink],
  styles:''
})
export class ProductCard2{
    @Input() Product!:Product;
    constructor(public ProductService:ProductService){

    }
}