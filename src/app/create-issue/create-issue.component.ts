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

  nameValue: string = "";
  descValue: string = "";
  labelValue: string = "";
  issuetypeValue: number = 0;
  statustypeValue: number = 0;
  priorityValue: number = 0;
  severityValue: number = 0;
  assigneValue: number = 0;



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
    });
  }

  onNameChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.nameValue = target.value;
  }

  onDescChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.descValue = target.value;
  }

  onLabelChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.labelValue = target.value;
  }

  onIssuetypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const issuetype = target.value;
    this.issuetypeValue = Number(issuetype)
  }

  onStatusChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const statustype = target.value;
    this.statustypeValue = Number(statustype)
  }

  onPriorityChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const priority = target.value;
    this.priorityValue = Number(priority)
  }

  onSeverityChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const severity = target.value;
    this.severityValue = Number(severity)
  }

  onAssigneChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const assigne = target.value;
    this.assigneValue = Number(assigne)
  }

  onSubmitClick(event: Event) {
    const issueData: any = {
      Title: this.nameValue,
      description: this.descValue,
      empid: this.assigneValue,
      issueid: this.issuetypeValue,
      sid: this.statustypeValue,
      severityid: this.severityValue,
      priority: this.priorityValue,
      label: this.labelValue,
    }

    if (issueData.Title === "") {
      alert("Enter title");
    } else if (issueData.description === "") {
      alert("Enter Description");
    } else if (issueData.label === "") {
      alert("Enter Label");
    } else if (issueData.issueid == 0 || null || undefined) {
      alert("Enter Issue type");
    } else if (issueData.sid == 0 || null || undefined) {
      alert("Enter Status type");
    } else if (issueData.priority == 0 || null || undefined) {
      alert("Enter Priority");
    } else if (issueData.severityid == 0 || null || undefined) {
      alert("Enter Severity");
    } else if (issueData.empid == 0 || null || undefined) {
      alert("Enter Assigne");
    } else {
      this.http.post('http://localhost:4000/createissue', issueData).subscribe((response: any) => {
        console.log("Post response", response)
        alert('Issue created successfully!');
      })
    }
  }
}
