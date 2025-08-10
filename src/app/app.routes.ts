import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Wishlist } from './wishlist/wishlist';
import { Product } from './product/product';

export const routes: Routes = [
    {path:"",component:Home,title:"Home"},
    {path:"cart",component:Cart,title:"Cart"},
    {path:"wishlist",component:Wishlist,title:"Wishlist"},
    {path:"product/:id",component:Product,title:"Product"}
];
