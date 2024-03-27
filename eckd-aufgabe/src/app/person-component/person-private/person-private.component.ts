import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatLabel } from '@angular/material/input';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'person-private',
  templateUrl: './person-private.component.html',
  styleUrl: './person-private.component.css',
})
export class PersonPrivateComponent {
  privatePersonForm: FormGroup;
  title: string = "";
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.privatePersonForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.pattern(/^\d{10}$/)], // Example: 10-digit mobile number
    });
  }

  onSubmit(): void {
    if (this.privatePersonForm.valid) {
      // Save form data
      console.log(
        'Private person form submitted:',
        this.privatePersonForm.value
      );
    } else {
      // Handle form validation errors
      console.log('Form validation failed.');
    }
  }
}
