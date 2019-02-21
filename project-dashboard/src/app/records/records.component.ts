import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../models/record.model';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  constructor() { }

  @Input() records: Record[];

  export(type: string) {
    switch (type) {
      case 'PDF':
        console.log('TODO: Exporting to PDF...');
        break;
      case 'XLSX':
        console.log('TODO: Exporting to XLSX...');
        break;
      default:
        console.log('TODO: Exporting to HTML...');
    }
  }

  get ownerNames() {
    return Array.from(new Set(this.records.map(record => record.project_owner)));
  }

  addRecord() {
    console.log('TODO: Add new record logic....')
  }

  ngOnInit() {
  }

}
