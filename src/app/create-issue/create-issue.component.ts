import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {
  projects:any;
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
  projecttypeValue:number=0;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getproject()
    this.getAllIssueTypes()
    this.getAllStatusTypes()
    this.getAllSeverityTypes()
    this.getUsersForDept()
  }

  public getproject() {
    this.http.get('http://localhost:4000/allissues').subscribe((data) => {
      this.projects = data;
    });
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

onprojectChange(event:Event){
  const target=event.target as HTMLSelectElement;
  const projectlist = target.value;
  this.projecttypeValue = Number(projectlist);
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
      desc: this.descValue,
      empid: this.assigneValue,
      issueid: this.issuetypeValue,
      sid: this.statustypeValue,
      severityid: this.severityValue,
      priority: this.priorityValue,
      label: this.labelValue,
    }

    if (issueData.Title === "") {
      console.log("Enter title")
    } else if (issueData.desc === "") {
      console.log("Enter DEsc")
    } else if (issueData.label === "") {
      console.log("Enter Label")
    } else if (issueData.issueid == 0 || null || undefined) {
      console.log("Enter Issue type")
    } else if (issueData.sid == 0 || null || undefined) {
      console.log("Enter Status type")
    } else if (issueData.priority == 0 || null || undefined) {
      console.log("Enter Prioruty")
    } else if (issueData.severityid == 0 || null || undefined) {
      console.log("Enter Severity")
    } else if (issueData.empid == 0 || null || undefined) {
      console.log("Enter Assigne")
    } else {
      console.log("All entered")
      this.http.post('http://localhost:4000/createissue', issueData).subscribe((response: any) => {
        console.log("Post response", response)
      })
    }
  }
}
