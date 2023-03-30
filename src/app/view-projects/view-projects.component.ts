import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  projects = [
    {
      id: 'P01',
      name: 'Project 1',
      primaryOwner: 'John Doe',
      secondaryOwner: 'Jane Smith',
      isActive: true,
      description: 'This is project 1.'
    },
    {
      id: 'P02',
      name: 'Project 2',
      primaryOwner: 'Jane Smith',
      secondaryOwner: 'John Doe',
      isActive: false,
      description: 'This is project 2.'
    }
  ];

  // Add edit and delete functions
  editProject(project: any) {
    console.log('Edit project:', project);
  }

  deleteProject(project: any) {
    console.log('Delete project:', project);
  }

  // allProjects: any;

  // constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //   this.getProjects()
  }

  // public getProjects() {
  //   this.http.get('http://localhost:4000/issues').subscribe((data) => {
  //     console.log("All projects", data)
  //     this.allProjects = data;
  //   });
  // }
}
