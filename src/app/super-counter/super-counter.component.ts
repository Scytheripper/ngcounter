import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../entities/counter';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

  @Input()
  counter: Counter;

  constructor() { 
  }

  ngOnInit() {
    if(this.counter.level === 3) {
      this.superCounterStart();
    }
  }

  
  superCounterStart() {
    window.setInterval(() => {
      this.increment();
    }, 1000);
  }
  
  increment() {
    if(this.counter.level === 3) {
      this.counter.value += 2;
    }
    else this.counter.value += 3;
  }

  decrement() {
    if(this.counter.value !== 0) {
      this.counter.value -= 3;
    }
  }
}
