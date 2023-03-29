import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  desc: string;
  assignto: string;
  priority: string;
  severity: string;
  issuetype: string;
  tags: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
  {
    position: 2,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
  {
    position: 3,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
  {
    position: 4,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
  {
    position: 5,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
  {
    position: 6,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
  {
    position: 7,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
  {
    position: 8,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
  {
    position: 9,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
  {
    position: 10,
    name: 'Hydrogen',
    desc: "njsbdfjbjs",
    assignto: 'Testing',
    priority: "1",
    severity: "HIGH",
    issuetype: "BUG",
    tags: "Latest",
  },
];
@Component({
  selector: 'app-view-issues',
  templateUrl: './view-issues.component.html',
  styleUrls: ['./view-issues.component.css']
})
export class ViewIssuesComponent {
  displayedColumns: string[] =
    [
      'position',
      'name',
      'desc',
      'assignto',
      'priority',
      'severity',
      'issuetype',
      'tags'
    ];
  dataSource = ELEMENT_DATA;
  // clickedRows = new Set<PeriodicElement>();
}
