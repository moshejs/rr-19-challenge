import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-dropdown-cell, [app-edit-dropdown-cell]',
  templateUrl: './edit-dropdown-cell.component.html',
  styleUrls: ['./edit-dropdown-cell.component.scss']
})
export class EditDropdownCellComponent implements OnInit {
  public isEditing = false;
  @Input() options: string[];
  @Input() key: string;
  @Input() value: string;
  @Input() index: number;
  @Output() public valueChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }

  ngOnInit() {
  }

  emitChange() {
    this.valueChange.emit({
      key: this.key,
      value: this.value,
      index: this.index
    });
  }

}
