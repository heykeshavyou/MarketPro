import { Component } from '@angular/core';
import { Banner } from '../Components/banner/banner';
import { Category } from "../Components/category/category";
import { Features } from "../Components/features/features";

@Component({
  selector: 'app-home',
  imports: [Banner, Category, Features],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
