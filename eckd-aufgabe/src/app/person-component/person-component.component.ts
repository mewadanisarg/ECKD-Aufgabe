import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',
  styleUrl: './person-component.component.css',
})
export class PersonComponentComponent {
  getparamid: any;
  constructor(private apiservice: ApiserviceService, private fb: FormBuilder) {}
  privatePersonForm = new FormGroup({
    title: new FormControl('', Validators.required),
    vorname: new FormControl('', Validators.required),
    nachname: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.privatePersonForm = this.fb.group({
      title: ['', Validators.required],
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.privatePersonForm.valid) {
      // Save form data
      console.log(
        'Private person form submitted:',
        this.privatePersonForm.value
      );
      this.apiservice.savePerson(this.privatePersonForm.value).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Private person form submitted');
        },
      });
    } else {
      // Handle form validation errors
      console.log('Form validation failed.');
    }
  }
}
