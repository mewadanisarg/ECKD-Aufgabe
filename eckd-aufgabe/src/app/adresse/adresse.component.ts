// adresse.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css'],
})
export class AdresseComponent implements OnInit {
  adresseForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.adresseForm = this.fb.group({
      strasse: ['', Validators.required],
      hausnummer: ['', Validators.required],
      ort: ['', Validators.required],
      plz: ['', Validators.pattern(/^\d{5}$/)],
    });
  }

  onSubmit(): void {
    if (this.adresseForm.valid) {
      // Save address data to the backend or perform other actions
      console.log('Address form submitted:', this.adresseForm.value);
    } else {
      // Handle form validation errors
      console.log('Form validation failed.');
    }
  }
}
