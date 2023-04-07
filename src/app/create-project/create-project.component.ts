import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  projectForm = new FormGroup({
    // id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    primaryOwner: new FormControl('', [Validators.required]),
    secondaryOwner: new FormControl('', [Validators.required]),
    isActive: new FormControl(true),
    description: new FormControl('')
  });

  constructor(private http: HttpClient,private router: Router) {}

  // 
  onSubmit() {
    
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      console.log(formData);
      this.http.post('http://localhost:4000/project', formData).subscribe({
        next: (response: any) => {
          console.log(response); // Handle success response
          const confirmRedirect = confirm('Project created successfully! Do you want to view the project?');
          if (confirmRedirect) {
            this.router.navigate(['/projects']); // Redirect to view-project page 
          } else {
            this.router.navigate(['/home']); // Redirect to home page
          }
        },
        error: (error) => {
          console.log(error); // Handle error response
        }
      });
    } else {
      this.projectForm.markAllAsTouched();
    }
  }
  

  onCancel() {
    this.projectForm.reset();
  }
}
