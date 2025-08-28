import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../Services/timer-service';
import { interval, Subscription } from 'rxjs';
import { Select2, Select2Data, Select2Option } from 'ng-select2-component';
import { CommonModule } from '@angular/common';
import { HomeDesignService } from '../../Services/home-design-service';
import {  RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../../Services/product-service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Select2, RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private intervalSubscription: Subscription | undefined;
  RouteName: string = '';
  data: Select2Data=[]
  constructor(
    public timer: TimerService,
    public ProductService: ProductService,
  ) {}
  ngOnInit(): void {
    var date = new Date();
    this.timer.hour.set(date.getHours());
    this.timer.min.set(date.getMinutes());
    this.timer.sec.set(date.getSeconds());
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.timer.Timer();
    });
    this.ProductService.Categories.forEach((item)=>{
      let model:Select2Option={
        value:item.Id,
        label:item.Name,
        id:item.Id.toString()
      }
      this.data.push(model);
    });
  }
  Search = false;
  searchClass = 'invisible opacity-0 translate-y-10';
  SetSearch() {
    this.searchClass = this.Search
      ? 'visible opacity-100 translate-y-0'
      : 'invisible opacity-0 translate-y-10';
    this.Search = !this.Search;
  }
  Header = false;
  HeaderClass = 'invisible opacity-0 translate-y-10';
  SetHeader() {
    this.HeaderClass = this.Header
      ? 'visible opacity-100 translate-y-0'
      : 'invisible opacity-0 translate-y-10';
    this.Header = !this.Header;
  }
    language = [
    {
      name: 'Hindi',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/500px-Flag_of_India.svg.png',
    },
    {
      name: 'English',
      img: 'https://cdn.worldvectorlogo.com/logos/united-states-flag.svg',
    },
    {
      name: 'Japanese',
      img: 'https://cdn.worldvectorlogo.com/logos/flag-of-japan.svg',
    },
    {
      name: 'Chinese',
      img: 'https://cdn.worldvectorlogo.com/logos/china-flag-1.svg',
    },
  ];
  currency = [
    {
      name: 'INR',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/500px-Flag_of_India.svg.png',
    },
    {
      name: 'usd',
      img: 'https://cdn.worldvectorlogo.com/logos/united-states-flag.svg',
    },
    {
      name: 'Yarn',
      img: 'https://cdn.worldvectorlogo.com/logos/flag-of-japan.svg',
    },
    {
      name: 'yaun',
      img: 'https://cdn.worldvectorlogo.com/logos/china-flag-1.svg',
    },
  ];
  NavigationLinks = [
    {
      name: 'Home',
      links: [
        {
          text: 'Home Grocery',
          route: '/',
        },
        {
          text: 'Home Electronics',
          route: '/electronics',
        },
        {
          text: 'Home Fashion',
          route: '/fashion',
        },
      ],
      new: false,
    },
    {
      name: 'Shop',
      links: [
        {
          text: 'Shop',
          route: '/shop',
        },
        {
          text: 'Shop Details ',
          route: '/ShopDetails',
        },
        {
          text: 'Shop Details Two ',
          route: '/Shopdetailstwo',
        },
      ],
      new: false,
    },
    {
      name: 'Pages',
      links: [
        {
          text: 'Cart',
          route: '/cart',
        },
        {
          text: 'Wishlist',
          route: '/wishlist',
        },
        {
          text: 'Checkout',
          route: '/Checkout',
        },
        {
          text: 'Become Seller',
          route: '/BecomeSeller',
        },
        {
          text: 'Account',
          route: '/profile',
        },
      ],
      new: true,
    },
    {
      name: 'Vendors',
      links: [
        {
          text: 'Vendors',
          route: '/vendors',
        },
        {
          text: 'Vendors Details',
          route: '/vendordetails',
        },
        {
          text: 'Vendors Two',
          route: '/vendorstwo',
        },
        {
          text: 'Vendors Two Details',
          route: '/venderstwodetails',
        },
      ],
      new: true,
    },
    {
      name: 'Blog',
      links: [
        {
          text: 'Blog',
          route: '/blog',
        },
        {
          text: 'Blog Details',
          route: '/blogdetails',
        },
      ],
      new: false,
    },
  ];
}
