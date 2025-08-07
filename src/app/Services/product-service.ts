import { Injectable, signal } from '@angular/core';
import Cart from '../Models/Cart'
import Wishlist from '../Models/Wishlist';
import Category from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Cart:Cart[]=[];
  Wishlist:Wishlist[]=[];
  CartCount=signal(this.Cart.length);
  WishlistCount=signal(this.Wishlist.length);
  Categories:Category[]=[
    {
      Id:1,
      Name:"Beauty & Care",
      Color:"bg-[#a1a1a1]",
      Img:"/Cate1.png"
    },
    {
      Id:2,
      Name:"Fashion & Cloths",
      Color:"bg-[#a9f0ad]",
      Img:"/Cate2.png"
    },
    {
      Id:3,
      Name:"Furniture & Fittings",
      Color:"bg-[#e09e86]",
      Img:"/Cate3.png"
    },
    {
      Id:4,
      Name:"Daily & Groceries",
      Color:"bg-[#cbe087]",
      Img:"/Cate4.png"
    },
    {
      Id:5,
      Name:"Electronics",
      Color:"bg-[#858585]",
      Img:"/Cate5.png"
    },
    {
      Id:6,
      Name:"Phones & Gadgets",
      Color:"bg-[#7fd5fa]",
      Img:"/Cate6.png"
    },
    {
      Id:7,
      Name:"Sports & Fitness",
      Color:"bg-[#ffec80]",
      Img:"/Cate7.png"
    },
    {
      Id:8,
      Name:"Toys & Kids",
      Color:"bg-[#ffda99]",
      Img:"/Cate8.png"
    },
    {
      Id:9,
      Name:"Books & Stationary",
      Color:"bg-[#ffcf91]",
      Img:"/Cate9.png"
    },
  ];
}
