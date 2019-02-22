import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Record } from '../../models/record.model';
@Component({
  selector: 'app-record-row, [app-record-row]',
  templateUrl: './record-row.component.html',
  styleUrls: ['./record-row.component.scss']
})
export class RecordRowComponent implements OnInit {
  @Input() record: Record;
  @Input() names: string[];
  @Input() statuses: string[];
  @Input() id: number;
  @Output() public valueChange: EventEmitter<any> = new EventEmitter();


  private editState = {
    title: false,
    budget: false,
    created: false,
    modified: false
  };

  constructor() { }

  ngOnInit() {
  }

  toggleEditMode(prop: string) {
    this.editState[prop] = !this.editState[prop];
  }

  emitChange(key: string, e: any) {
    this.valueChange.emit({
      key: key,
      value: e.value,
      index: this.id
    });
  }

}
