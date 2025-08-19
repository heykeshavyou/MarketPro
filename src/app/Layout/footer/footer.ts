import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  links = [
    {
      title: 'Information',
      sublinks: [
        { name: 'Become a Vendor', route: 'Become a Vendor' },
        { name: 'Affiliate Program', route: 'Affiliate Program' },
        { name: 'Privacy Policy', route: 'Privacy Policy' },
        { name: 'Our Suppliers', route: 'Our Suppliers' },
        { name: 'Extended Plan', route: 'Extended Plan' },
        { name: 'Community', route: 'Community' },
      ],
    },
    {
      title: 'Customer Support',
      sublinks: [
        { name: 'Help Center', route: 'Help Center' },
        { name: 'Contact Us', route: 'Contact Us' },
        { name: 'Report Abuse', route: 'Report Abuse' },
        { name: 'Submit and Dispute', route: 'Submit and Dispute' },
        { name: 'Policies & Rules', route: 'Policies & Rules' },
        { name: 'Online Shopping', route: 'Online Shopping' },
      ],
    },
    {
      title: 'My Account',
      sublinks: [
        { name: 'My Account', route: 'My Account' },
        { name: 'Order History', route: 'Order History' },
        { name: 'Shopping Cart', route: 'cart' },
        { name: 'Compare', route: 'Compare' },
        { name: 'Help Ticket', route: 'Help Ticket' },
        { name: 'Wishlist', route: 'wishlist' },
      ],
    },
    {
      title: 'Daily Groceries',
      sublinks: [
        { name: 'Dairy & Eggs', route: 'Dairy & Eggs' },
        { name: 'Meat & Seafood', route: 'Meat & Seafood' },
        { name: 'Breakfast Food', route: 'Breakfast Food' },
        { name: 'Household Supplies', route: 'Household Supplies' },
        { name: 'Bread & Bakery', route: 'Bread & Bakery' },
        { name: 'Pantry Staples', route: 'Pantry Staples' },
      ],
    },
  ];
  socailLinks = [
    {
      link: 'https://www.instagram.com/heykeshavyou/?hl=en',
      img: '/instagram.svg',
    },
    {
      link: 'https://www.linkedin.com/in/heykeshavyou/',
      img: '/linkedin.svg',
    },
    {
      link: 'https://github.com/heykeshavyou',
      img: '/github.svg',
    },
    {
      link: 'https://www.facebook.com/people/Keshav-Singh/pfbid03tbEtopRspisUgyXqhsqakneabdGmnvWd81Uk7xV9iezsmRaBWfwumMoh8xEkjxPl/',
      img: '/facebook.svg',
    },
  ];
  date = new Date();
}
