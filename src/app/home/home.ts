import { Component } from '@angular/core';
import { Banner } from '../Components/banner/banner';
import { Category } from "../Components/category/category";
import { Features } from "../Components/features/features";
import { FlashSale } from "../Components/flash-sale/flash-sale";
import { Offers } from "../Components/offers/offers";
import { Reccommended } from "../Components/reccommended/reccommended";
import { Offers2 } from "../Components/offers2/offers2";
import { HotDeals } from "../Components/hot-deals/hot-deals";

@Component({
  selector: 'app-home',
  imports: [Banner, Category, Features, FlashSale, Offers, Reccommended, Offers2, HotDeals],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
