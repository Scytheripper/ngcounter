import { Component, OnInit, Input } from '@angular/core';
import { CounterListComponent } from '../counter-list/counter-list.component';
import { Counter } from '../entities/counter';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input()
  counters: Counter[];

  total: number = 0;

  constructor() { 
  }

  ngOnInit() {
    window.setInterval(() => {
      this.total = this.counters.reduce((acc, counter) => acc += counter.value, 0)
    }, 1000);
  }


}
