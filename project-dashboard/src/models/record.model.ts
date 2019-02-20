export class Record {
    title: string;
    division: string;
    budget: number;
    status: 'archived' | 'new' | 'working' | 'delivered';
    created: string;
    modified: string;
}
