// bankverbindung.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bankverbindung',
  templateUrl: './bankverbindung.component.html',
  styleUrls: ['./bankverbindung.component.css'],
})
export class BankverbindungComponent implements OnInit {
  bankverbindungForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.bankverbindungForm = this.fb.group({
      accountHolder: ['', Validators.required],
      iban: [
        '',
        Validators.pattern(/^[A-Z]{2}\d{2}[A-Z\d]{4}\d{7}([A-Z\d]?){0,16}$/i),
      ], // Example: IBAN validation
      // Add other form controls as needed
    });
  }

  onSubmit(): void {
    if (this.bankverbindungForm.valid) {
      // Save bank account data to the backend or perform other actions
      console.log(
        'Bankverbindung form submitted:',
        this.bankverbindungForm.value
      );
    } else {
      // Handle form validation errors
      console.log('Form validation failed.');
    }
  }
}
