import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from "../contact/contact.component";
import { ExperienceComponent } from '../../experience/experience.component';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private cdref: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    this.cdref.detectChanges();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const options = {
      strings: ['MOSAAD NABIL ABOKAMMER'],
      typeSpeed: 100,
      backSpeed: 90,
      backDelay: 3000,
      loop: true,
      showCursor: true
    };

    new Typed('#typed-name', options);
  }
}
