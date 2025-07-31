import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms'; // مهم للنماذج
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  ngAfterViewInit(): void {
    if (this.contactForm) {
      this.contactForm.nativeElement.addEventListener("submit", this.sendEmail.bind(this));
    }
  }

  sendEmail(e: Event): void {
    e.preventDefault();

    emailjs.sendForm(
      'service_njjpl9d',
      'template_h8k05f7',
      this.contactForm.nativeElement,
      'VddB5e6CqwRuzpxmx'
    )
    .then(() => {
      alert('Message sent successfully!');
      this.contactForm.nativeElement.reset(); // Reset the form
    })
    .catch((error) => {
      console.error('Email send error:', error);
      alert('Something went wrong, please try again.');
    });
  }
}
