import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../Services/timer-service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
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
}
