import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  hour=signal(0);
  min=signal(0);
  sec=signal(0);
  constructor() {
    
  }
  Timer(){
    this.sec.set(this.sec()-1);
    if(this.sec()==0){
      this.min.set(this.min()-1);
      if(this.min()==0){
        this.hour.set(this.hour()-1);
        this.min.set(59);
      }
      this.sec.set(59);
    }
  }
}
