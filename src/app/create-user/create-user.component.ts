import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  
  constructor(private http: HttpClient,private router: Router){}

  userDepartments: any;
  UserUnderDeptArray: any[] = [];

  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),

    role: new FormControl('Development', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    isactive:new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
     this.getUsersForDept();
  }

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
      this.http.post('http://localhost:4000/user', formData).subscribe((response: any) => {
        console.log("Post response", response);
        const confirmRedirect = confirm('User created successfully!\nDo you want to redirect to the view user page?\nClick no if you want to redirect to home page');
        if (confirmRedirect) {
          // Redirect to view user page
          // Assuming the view user component is named ViewUserComponent
          this.router.navigate(['/users']);
        } else {
          // Redirect to home page
          this.router.navigate(['/home']);
        }
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
  

  onCancel() {
    this.userForm.reset();
  }
}
