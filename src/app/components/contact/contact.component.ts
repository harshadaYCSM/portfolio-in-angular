import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
    if (this.contactForm.valid) {
      console.log("Form Values: ", this.contactForm.value)
      const { name, email, message } = this.contactForm.value;
      const emailSubject = encodeURIComponent('Contact Form Submission');
      const emailBody = encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`);
      const mailtoLink = `mailto:charsh18@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      window.location.href = mailtoLink;

      // Reset form fields
      this.contactForm.reset();
    }
  }

}
