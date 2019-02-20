import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '../models/record.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>('api/records');
  }
}
