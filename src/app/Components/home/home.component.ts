import { Component, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from "../contact/contact.component";
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  constructor(private cdref: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
  this.cdref.detectChanges();

  const options = {
    strings: ['MOSAD NABIL ABOKAMER'],
    typeSpeed: 100,
    backSpeed: 90,
    backDelay: 3000,
    loop: true,
    showCursor: true
  };

  new Typed('#typed-name', options);
}
}
