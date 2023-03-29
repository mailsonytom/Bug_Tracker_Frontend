import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    role: new FormControl('Admin'),
    isActive: new FormControl(true),
    gender: new FormControl('', [Validators.required])
  });
  

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
