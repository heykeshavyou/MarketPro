import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Wishlist } from './wishlist/wishlist';
import { Product } from './product/product';
import { Shop } from './shop/shop';
import { Blog } from './blog/blog';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'cart', component: Cart, title: 'Cart' },
  { path: 'wishlist', component: Wishlist, title: 'Wishlist' },
  { path: 'product/:id', component: Product, title: 'Product'},
  {path : 'shop',component:Shop,title:'Shop'},
  {path:'blog',component:Blog,title:'Blog'},
  {path:"contact",loadComponent:()=>import('./contact/contact').then(m=>m.Contact),title:'Contact Us'}
];
