import { Component } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  // Define the users array property
  users = [
    {
      displayName: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890',
      gender: 'male',
      role: 'Admin',
      isActive: true
    },
    {
      displayName: 'Jane Smith',
      email: 'janesmith@example.com',
      phone: '9876543210',
      gender: 'female',
      role: 'QA',
      isActive: false
    }
  ];

  // Add edit and delete functions
  editUser(user: any) {
    console.log('Edit user:', user);
  }

  deleteUser(user: any) {
    console.log('Delete user:', user);
  }


}
