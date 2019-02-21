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
  public filteredRecords: Record[] = [];
  public show = {
    title: false,
    division: false,
    project_owner: false
  };

  filters = {
    project_owner: [],
    status: []
  };

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

  extractProperties(prop: string): any[] {
    return this.records ? Array.from(new Set(this.records.map(record => record[prop]))) : [];
  }

  get ownerNames(): string[] {
    return this.extractProperties('project_owner');
  }

  get divisions(): string[] {
    return this.extractProperties('division');
  }

  get statuses(): string[] {
    return this.extractProperties('status');

  }

  addRecord() {
    console.log('TODO: Add new record logic....')
  }

  toggleFilter(prop: string, bool = !this.show[prop]) {
    this.show[prop] = bool;
  }

  updateData(e: any) {
    console.log(e);

    this.records[e.index][e.key] = e.value;

    console.log(this.records[e.index]);

    this.filter();

  }

  filter() {
    // console.log(this.filters, this.records)
    let master = [...this.records];

    if (this.filters.project_owner.length > 0) {
      master = master.filter(x => this.filters.project_owner.includes(x.project_owner));
    }

    if (this.filters.status.length > 0) {
      master = master.filter(x =>  this.filters.status.includes(x.status));
    }

    this.filteredRecords = master;
  }



  ngOnInit() {
  }
}
