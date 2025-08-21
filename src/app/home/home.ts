import { Component } from '@angular/core';
import { Banner } from '../Components/banner/banner';
import { Category } from "../Components/category/category";
import { Features } from "../Components/features/features";
import { FlashSale } from "../Components/flash-sale/flash-sale";
import { Offers } from "../Components/offers/offers";
import { Reccommended } from "../Components/reccommended/reccommended";

@Component({
  selector: 'app-home',
  imports: [Banner, Category, Features, FlashSale, Offers, Reccommended],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
