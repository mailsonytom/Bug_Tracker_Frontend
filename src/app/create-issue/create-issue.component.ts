import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {

  allIssueTypes: any;
  allStatusTypes: any;
  allSeverityTypes: any;
  userDepartments: any;
  UserUnderDeptArray: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllIssueTypes()
    this.getAllStatusTypes()
    this.getAllSeverityTypes()
    this.getUsersForDept()
  }

  public getAllIssueTypes() {
    this.http.get('http://localhost:4000/allissues').subscribe((data) => {
      this.allIssueTypes = data;
    });
  }

  public getAllStatusTypes() {
    this.http.get('http://localhost:4000/getallstatus').subscribe((data) => {
      this.allStatusTypes = data;
    });
  }

  public getAllSeverityTypes() {
    this.http.get('http://localhost:4000/allseverities').subscribe((data) => {
      this.allSeverityTypes = data;
    });
  }

  public getUsersForDept() {
    this.http.get('http://localhost:4000/user').subscribe((response: any) => {
      let DeptArray: any[] = [];
      response.users.map((resObj: any) => {
        DeptArray.push(resObj.role)
      })
      this.userDepartments = Array.from(new Set(DeptArray));
    });
  }

  onSelectDept(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.UserUnderDeptArray = [];
    this.http.get('http://localhost:4000/user').subscribe((response: any) => {
      response.users.map((resObj: any) => {
        if (resObj.role === value) {
          this.UserUnderDeptArray.push({
            empid: resObj.empid,
            name: resObj.userName,
            role: resObj.role
          })
        }
      })
      console.log("After", this.UserUnderDeptArray)
    });
  }
}
