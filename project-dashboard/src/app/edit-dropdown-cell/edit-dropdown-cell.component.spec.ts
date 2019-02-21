import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDropdownCellComponent } from './edit-dropdown-cell.component';

describe('EditDropdownCellComponent', () => {
  let component: EditDropdownCellComponent;
  let fixture: ComponentFixture<EditDropdownCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDropdownCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDropdownCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
