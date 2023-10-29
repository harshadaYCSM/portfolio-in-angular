import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Adjust the path as needed
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  handleSubmit() {
    const emailSubject = encodeURIComponent('Contact Form Submission');
    const emailBody = encodeURIComponent(`Name: ${this.name}%0D%0AEmail: ${this.email}%0D%0AMessage: ${this.message}`);
    const mailtoLink = `mailto:charsh18@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;

    // Reset form fields
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
