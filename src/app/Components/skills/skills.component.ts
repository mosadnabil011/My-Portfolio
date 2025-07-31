import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'HTML', level: 'Advanced', icon: 'bi bi-filetype-html' },
    { name: 'CSS', level: 'Advanced', icon: 'bi bi-filetype-css' },
    { name: 'JavaScript', level: 'Advanced', icon: 'bi bi-filetype-js' },
    { name: 'Angular', level: 'Intermediate', icon: 'bi bi-lightning-fill' },
    { name: 'Bootstrap', level: 'Advanced', icon: 'bi bi-bootstrap' },
    { name: 'Git', level: 'Intermediate', icon: 'bi bi-git' },
  ];

  ngOnInit(): void {
    AOS.init();
  }
}
