import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  // // Add edit and delete functions
  // editProject(project: any) {
  //   console.log('Edit project:', project);
  // }

  // deleteProject(project: any) {
  //   console.log('Delete project:', project);
  // }

  allProjects: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProjects()
  }

  public getProjects() {
    this.http.get('http://localhost:4000/project').subscribe((data) => {
      this.allProjects = data;
    });
  }
}
