import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../models/record.model';
@Component({
  selector: '[app-record-row]',
  templateUrl: './record-row.component.html',
  styleUrls: ['./record-row.component.scss']
})
export class RecordRowComponent implements OnInit {
  @Input() record: Record;
  @Input() names: any;

  private editState = {
    title: false,
    division: false,
    project_owner: false,
    budget: false,
    status: false
  };

  constructor() { }

  ngOnInit() {
  }

  toggleEditMode(prop) {
    this.editState[prop] = !this.editState[prop];
  }

}
