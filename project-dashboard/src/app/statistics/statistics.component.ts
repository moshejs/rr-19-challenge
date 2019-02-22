import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../models/record.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() records$: Observable<Record[]>;
  public budgetData: {name: string, value: number}[] = [];
  public statusDistribution: {name: string, value: number}[] = [
    {
      name: 'archived',
      value: 0
    },
    {
      name: 'working',
      value: 0
    },
    {
      name: 'new',
      value: 0
    },
    {
      name: 'delivered',
      value: 0
    },
  ];

  constructor() { }

  ngOnInit() {
    this.records$.subscribe(records => {
      this.calculateStatusDistribution(records);
      this.calculateDivisionBudget(records);
    });


  }

  calculateStatusDistribution(records: Record[] ) {
    this.statusDistribution.forEach(field => {
      records.filter(record => record.status === field.name)
      .forEach(filteredRecord => field.value += 1);
    });
  }

  calculateDivisionBudget(records: Record[]) {
    const hashmap: Array<any> = [];

    records.forEach(record => {
      if (hashmap[record.division]) {
        hashmap[record.division] += record.budget;
      } else {
        hashmap[record.division] = record.budget;
      }
    });

    // tslint:disable-next-line:forin
    for (const key in hashmap) {
      this.budgetData.push({
        name: key,
        value: hashmap[key]
      });
    }
  }

  toDollars(val) {
    return '$' + val.toLocaleString();
  }

}
