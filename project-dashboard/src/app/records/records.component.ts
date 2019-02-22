import { Component, Input } from '@angular/core';
import { Record } from '../../models/record.model';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent {
  constructor() { }

  @Input() records: Record[];
  @Input() filteredRecords: Record[]; // Clone of records, 2 equivalent inputs due to weak state management

  public show = {
    title: false,
    division: false,
    project_owner: false,
    budget: false,
    creationDate: false,
    modifiedDate: false
  };

  filters = {
    title: '',
    project_owner: [],
    status: [],
    division: [],
    budget: {
      from: 0,
      to: 0
    },
    creationDate: {
      from: null,
      to: null
    },
    modifiedDate: {
      from: null,
      to: null
    }
  };

  export(type: string): void {
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

  addRecord(): void {
    console.log('TODO: Add new record logic....')
  }

  toggleFilter(prop: string, bool = !this.show[prop]): void {
    this.show[prop] = bool;
    this.filter();
  }

  resetFilters(): void {
    this.filters = {
      title: '',
      project_owner: [],
      status: [],
      division: [],
      budget: {
        from: 0,
        to: 0
      },
      creationDate: {
        from: null,
        to: null
      },
      modifiedDate: {
        from: null,
        to: null
      }
    };
    this.filter();
  }

  updateData(e: any): void {
    const currentRecord = this.records[e.index];

    currentRecord[e.key] = e.value;
    currentRecord['modified'] = Date.now().toString();

    this.filter();

  }

  filter(): void {
    let master = [...this.records];

    if (this.filters.title !== '') {
      master = master.filter(record => record.title.toLowerCase().includes(this.filters.title.toLowerCase()));
    }

    if (this.filters.project_owner.length > 0) {
      master = master.filter(record => this.filters.project_owner.includes(record.project_owner));
    }

    if (this.filters.status.length > 0) {
      master = master.filter(record =>  this.filters.status.includes(record.status));
    }

    if (this.filters.division.length > 0) {
      master = master.filter(record =>  this.filters.division.includes(record.division));
    }

    if (this.filters.budget.from > 0 && this.filters.budget.to > 0) {
      master = master.filter(record =>  record.budget >= this.filters.budget.from && record.budget <= this.filters.budget.to);
    }
    if (this.filters.creationDate.from > 0 && this.filters.creationDate.to > 0) {
      master = master.filter(record =>  new Date(record.created) >= new Date(this.filters.creationDate.from) &&
        new Date(record.created) <= new Date(this.filters.creationDate.to));
    }

    if (this.filters.modifiedDate.from > 0 && this.filters.modifiedDate.to > 0) {
      master = master.filter(record =>  new Date(record.modified) >= new Date(this.filters.modifiedDate.from) &&
        new Date(record.modified) <= new Date(this.filters.modifiedDate.to));
    }

    this.filteredRecords = master;
  }
}
