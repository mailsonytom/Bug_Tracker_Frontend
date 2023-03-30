import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// export interface issuesModel {
//   createissueid: number;
//   Title: string;
//   description: string;
//   assigne: string;
//   priority: number;
//   severity: string;
//   issue: string;
//   tags: string;
//   status: string;
// }
@Component({
  selector: 'app-view-issues',
  templateUrl: './view-issues.component.html',
  styleUrls: ['./view-issues.component.css']
})
export class ViewIssuesComponent implements OnInit {

  allissues: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getIssues()
  }

  public getIssues() {
    this.http.get('http://localhost:4000/issues').subscribe((data) => {
      this.allissues = data;
    });
  }
}
