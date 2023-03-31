import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private http: HttpClient){}

  userDepartments: any;
  UserUnderDeptArray: any[] = [];

  userForm = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    role: new FormControl('Admin'),
    isActive: new FormControl(true),
    gender: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {

    this.getUsersForDept();
  }


  // public getUsersForDept() {
  //   this.http.get('http://localhost:4000/user').subscribe((response: any) => {
  //     let DeptArray: any[] = [];
  //     response.users.map((resObj: any) => {
  //       DeptArray.push(resObj.role)
  //     })
  //     this.userDepartments = Array.from(new Set(DeptArray));
  //   });
  // }
  public getUsersForDept() {
    this.http.get('http://localhost:4000/user').subscribe((response: any) => {
      let DeptArray: any[] = [];
      response.users.map((resObj: any) => {
        DeptArray.push(resObj.role);
      });
      this.userDepartments = DeptArray.filter((role, index, array) => {
        return array.indexOf(role) === index;
      });
    });
  }
  

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log(formData); // TODO: Replace with actual code to send data to server
      alert('User created successfully!');
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.userForm.reset();
  }
}
