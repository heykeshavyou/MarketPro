import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../Services/timer-service';
import { interval, Subscription } from 'rxjs';
import { Select2, Select2Data } from 'ng-select2-component';
import { CommonModule } from '@angular/common';
import { HomeDesignService } from '../../Services/home-design-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Select2,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private intervalSubscription: Subscription | undefined;
  constructor(public timer: TimerService,public HomeDesign:HomeDesignService) {}
  ngOnInit(): void {
    var date = new Date();
    this.timer.hour.set(date.getHours());
    this.timer.min.set(date.getMinutes());
    this.timer.sec.set(date.getSeconds());
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.timer.Timer();
    });
  }
   Search=false;
   searchClass="invisible opacity-0 translate-y-10";
   SetSearch(){
    this.searchClass=(this.Search)?"visible opacity-100 translate-y-0":"invisible opacity-0 translate-y-10";
    this.Search=!this.Search;
   }
   Header=false;
   HeaderClass="invisible opacity-0 translate-y-10";
   SetHeader(){
    this.HeaderClass=(this.Header)?"visible opacity-100 translate-y-0":"invisible opacity-0 translate-y-10";
    this.Header=!this.Header;
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
}
