import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../entities/counter';

@Component({
  selector: 'app-counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {

  @Input()
  counter: Counter;
  constructor() { 
  }

  ngOnInit() {
  }

  increment() {
    this.counter.value += 1;
  }

  decrement() {
    if(this.counter.value !== 0) {
      this.counter.value -= 1;
    }
  }
}
