import { Component } from '@angular/core';
import { Banner } from '../Components/banner/banner';
import { Category } from "../Components/category/category";
import { Features } from "../Components/features/features";
import { FlashSale } from "../Components/flash-sale/flash-sale";
import { Offers } from "../Components/offers/offers";
import { Reccommended } from "../Components/reccommended/reccommended";
import { Offers2 } from "../Components/offers2/offers2";
import { HotDeals } from "../Components/hot-deals/hot-deals";
import { Offers3 } from "../Components/offers3/offers3";
import { Brands } from "../Components/brands/brands";
import { DailyBestSells } from "../Components/daily-best-sells/daily-best-sells";
import { NewsLetter2 } from "../Components/news-letter2/news-letter2";

@Component({
  selector: 'app-home',
  imports: [Banner, Category, Features, FlashSale, Offers, Reccommended, Offers2, HotDeals, Offers3, Brands, DailyBestSells, NewsLetter2],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
