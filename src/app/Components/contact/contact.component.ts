import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import * as emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  status: SendStatus = 'idle';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.contactForm) {
      return;
    }
    this.contactForm.nativeElement.addEventListener('submit', this.sendEmail.bind(this));
  }

  sendEmail(e: Event): void {
    e.preventDefault();

    if (this.status === 'sending') {
      return; // guard against double-submit
    }

    const form = this.contactForm.nativeElement;

    // Honeypot: a hidden field real users never fill in. Bots that
    // auto-fill every input will trip it, and we silently drop the submit.
    const honeypot = form.querySelector<HTMLInputElement>('input[name="company"]');
    if (honeypot?.value) {
      return;
    }

    this.status = 'sending';

    emailjs
      .sendForm(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        form,
        environment.emailjs.publicKey
      )
      .then(() => {
        this.status = 'success';
        form.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        this.status = 'error';
      });
  }
}
