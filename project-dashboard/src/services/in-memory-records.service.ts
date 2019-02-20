import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as recordsData from '../data/records.json';
import { Record } from '../models/record.model';

export class InMemRecordService implements InMemoryDbService {
  createDb() {
    const records: Record[] = recordsData;

    return {records};
  }
}
