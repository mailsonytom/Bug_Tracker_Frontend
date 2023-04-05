import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  // Define the users array property
  allUsers: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers()
  }

  public getUsers() {
    this.http.get('http://localhost:4000/user').subscribe((response: any) => {
      this.allUsers = response.users;
    });
  }

  // Add edit and delete functions
  // editUser(user: any) {
  //   console.log('Edit user:', user);
  // }

  // deleteUser(user: any) {
  //   console.log('Delete user:', user);
  // }

}
