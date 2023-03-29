import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  projectForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    primaryOwner: new FormControl('', [Validators.required]),
    secondaryOwner: new FormControl('', [Validators.required]),
    isActive: new FormControl(true),
    description: new FormControl('')
  });

  onSubmit() {
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      console.log(formData); // TODO: Replace with actual code to send data to server
      alert('Project created successfully!');
    } else {
      this.projectForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.projectForm.reset();
  }
}
