import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemRecordService } from 'src/services/in-memory-records.service';
import { RecordRowComponent } from './record-row/record-row.component';
import { RecordsComponent } from './records/records.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EditDropdownCellComponent } from './edit-dropdown-cell/edit-dropdown-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordRowComponent,
    RecordsComponent,
    EditDropdownCellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemRecordService, { delay: 500 }),
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
