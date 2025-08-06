import { Injectable } from '@angular/core';
import { Select2Data } from 'ng-select2-component';

@Injectable({
  providedIn: 'root',
})
export class HomeDesignService {
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
  data: Select2Data = [
    { value: '1', label: 'All Category', id: '1' },
    { value: '2', label: 'Grocery', id: '2' },
    { value: '3', label: 'Breakfast & Dairy', id: '3' },
    { value: '4', label: 'Vegetables', id: '4' },
    { value: '5', label: 'Milks and Dairies', id: '5' },
    { value: '6', label: 'Pet Foods & Toy', id: '6' },
    { value: '7', label: 'Bread & Bakery', id: '7' },
    { value: '8', label: 'Fresh Seafood', id: '8' },
    { value: '9', label: 'Frozen Foods ', id: '9' },
    { value: '10', label: 'Snacks', id: '10' },
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
          route: '/acoount',
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
