import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/services/records.service';
import { Observable } from 'rxjs';

import { Record } from '../models/record.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private recordsService: RecordsService) {
  }
  title = 'Project Dashboard';
  records$: Observable<Record[]>;

  ngOnInit() {
    this.records$ = this.getRecords();
  }

  getRecords(): Observable<Record[]> {
    return this.recordsService.getRecords();
  }
}
