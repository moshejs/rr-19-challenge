export class Record {
    title: string;
    division: string;
    project_owner: string;
    budget: number;
    status: 'archived' | 'new' | 'working' | 'delivered';
    created: string;
    modified: string;
}
