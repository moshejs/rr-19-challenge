import { InMemoryDbService } from 'angular-in-memory-web-api';
import { mockRecords } from '../data/records';
import { Record } from '../models/record.model';

export class InMemRecordService implements InMemoryDbService {
  createDb() {
    const records: Record[] = <Record[]>mockRecords;

    return {records};
  }
}
