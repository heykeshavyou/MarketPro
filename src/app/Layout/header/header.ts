import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../Services/timer-service';
import { interval, Subscription } from 'rxjs';
import { Select2, Select2Data } from 'ng-select2-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Select2],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private intervalSubscription: Subscription | undefined;
  constructor(public timer: TimerService) {}
  ngOnInit(): void {
    var date = new Date();
    this.timer.hour.set(date.getHours());
    this.timer.min.set(date.getMinutes());
    this.timer.sec.set(date.getSeconds());
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.timer.Timer();
    });
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
   Search=false;
   searchClass="invisible opacity-0 translate-y-10";
   SetSearch(){
    this.searchClass=(this.Search)?"visible opacity-100 translate-y-0":"invisible opacity-0 translate-y-10";
    this.Search=!this.Search;
   }
   Category=[
    {name:"Vegetables",img:"/Category1.jpeg"},
    {name:"Milk & Cake",img:"/Category2.jpeg"},
    {name:"Grocery",img:"/Category3.jpeg"},
    {name:"Beauty",img:"/Category4.jpeg"},
    {name:"Wines & Drinks",img:"/Category5.jpeg"},
    {name:"Snacks",img:"/Category6.jpeg"},
    {name:"Juice",img:"/Category7.jpeg"},
    {name:"Fruits",img:"/Category8.jpeg"},
    {name:"Tea & Coffee",img:"/Category9.jpeg"},
  ]
  Broswer=false;
  BroswerClass="invisible opacity-0 translate-y-10";
  SetBroswer(){
    this.BroswerClass=(this.Broswer)?"visible opacity-100 translate-y-0":"invisible opacity-0 translate-y-10";
    this.Broswer=!this.Broswer;
   }
}
