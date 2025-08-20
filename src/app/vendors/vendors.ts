import { Component, signal } from '@angular/core';
import { BreadCrumb } from "../Components/bread-crumb/bread-crumb";
import { Info } from "../Components/info/info";
import { NewsLetter } from "../Components/news-letter/news-letter";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendors',
  imports: [BreadCrumb, Info, NewsLetter,CommonModule],
  templateUrl: './vendors.html',
  styleUrl: './vendors.css'
})
export class Vendors {
  Count=signal(1);
  arraynumber=Array.from({ length: 5 }, (_, i) => i + 1);
  Vendors=[
    {
      name:"Organic Market",
      img:"/vendor-logo1.png",
      color:'bg-[#f4f6e6]',
    },
    {
      name:"Safeway",
      img:"/vendor-logo2.png",
      color:'bg-[#e6f6f6]',
    },
    {
      name:"Food Max",
      img:"/vendor-logo3.png",
      color:'bg-[#f6e6f6]',
    },
    {
      name:"Hr Mart",
      img:"/vendor-logo4.png",
      color:'bg-[#f8eae4]',
    },
    {
      name:"Lucky Supermarket",
      img:"/vendor-logo5.png",
      color:'bg-[#f8eae4]',
    },
    {
      name:"Arico Farmer",
      img:"/vendor-logo6.png",
      color:'bg-[#dee6f3]',
    },
    {
      name:"Farmer Market",
      img:"/vendor-logo7.png",
      color:'bg-[#daf2db]',
    },
    {
      name:"Foods Co.",
      img:"/vendor-logo8.png",
      color:'bg-[#f4f6e6]',
    },
     {
      name:"Organic Market",
      img:"/vendor-logo1.png",
      color:'bg-[#f4f6e6]',
    },
    {
      name:"Safeway",
      img:"/vendor-logo2.png",
      color:'bg-[#e6f6f6]',
    },
    {
      name:"Food Max",
      img:"/vendor-logo3.png",
      color:'bg-[#f6e6f6]',
    },
    {
      name:"Hr Mart",
      img:"/vendor-logo4.png",
      color:'bg-[#f8eae4]',
    },
  ];
}
