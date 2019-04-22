import { Component, OnInit } from '@angular/core';
import { Counter } from '../entities/counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters: Counter[];
  MAX_COUNTERS: number = 11;
  tooManyCounters:string = "You can't have more than 10 counters!";
  constructor() {
    this.counters = [];
   }

  ngOnInit() {
  }


  createCounter() {
    if(this.counters.length < this.MAX_COUNTERS){
      let counter = new Counter(0, 0, 'Counter');
      this.counters.push(counter);
      //if there are 6 counter, merge them to a super
      if(this.counters.filter(counter => counter.level === 0).length === 6){
        let total = this.counters.filter( counter => counter.level === 0)
                                  .reduce((acc, counter) => acc += counter.value, 0);
        let superCounter = new Counter(1, total, 'SuperCounterLv1'); 
        this.counters = this.counters.filter(counter => counter.level > 0);
        this.counters.push(superCounter);

        //Now check to consolidate level 1 super counters
        if(this.counters.filter(counter => counter.level === 1).length === 3) {
          this.createSuperCounterLevel2();
        }

        //Now check to consolidate level 2 super counters
        if(this.counters.filter(counter => counter.level >= 1).length === 6) {
          this.createSuperCounterLevel3();
        }
      }
    }
  }

  createSuperCounterLevel2() {
    //check for how many super counters
      let total = this.counters.filter( counter => counter.level === 1)
      .reduce((acc, counter) => acc += counter.value, 0);
      let superCounter = new Counter(2, total, 'SuperCounterLv2'); 
      this.counters = this.counters.filter(counter => counter.level > 1);
      this.counters.push(superCounter);
  }

  createSuperCounterLevel3() {
    //check for how many super counters
      let total = this.counters.filter( counter => counter.level > 1)
      .reduce((acc, counter) => acc += counter.value, 0);
      let superCounter = new Counter(3, total, 'SuperCounterLv3'); 
      this.counters = this.counters.filter(counter => counter.type === 'Counter');
      this.counters.push(superCounter);
  }
}
