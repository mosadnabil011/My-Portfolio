import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {

  skills = [
    // Programming Languages
    {
      name: 'JavaScript',
      category: 'Programming Language',
      icon: 'bi bi-filetype-js'
    },
    {
      name: 'HTML5',
      category: 'Programming Language',
      icon: 'bi bi-filetype-html'
    },
    {
      name: 'CSS3',
      category: 'Programming Language',
      icon: 'bi bi-filetype-css'
    },
    {
      name: 'Python',
      category: 'Programming Language',
      icon: 'bi bi-code-slash'
    },
    {
      name: 'Java',
      category: 'Programming Language',
      icon: 'bi bi-cup-hot'
    },

    // Frameworks & Libraries
    {
      name: 'Angular',
      category: 'Framework',
      icon: 'bi bi-lightning-fill'
    },
    {
      name: 'React',
      category: 'Framework',
      icon: 'bi bi-code-square'
    },
    {
      name: 'Express.js',
      category: 'Framework',
      icon: 'bi bi-server'
    },
    {
      name: 'Bootstrap',
      category: 'Framework',
      icon: 'bi bi-bootstrap'
    },

    // Backend & Databases
    {
      name: 'Node.js',
      category: 'Backend',
      icon: 'bi bi-node-plus'
    },
    {
      name: 'MongoDB',
      category: 'Database',
      icon: 'bi bi-database'
    },
    {
      name: 'Mongoose',
      category: 'Database',
      icon: 'bi bi-database-check'
    },
    {
      name: 'REST APIs',
      category: 'Backend',
      icon: 'bi bi-cloud-arrow-up'
    },
    {
      name: 'JWT',
      category: 'Authentication',
      icon: 'bi bi-shield-lock'
    },
    {
      name: 'Joi',
      category: 'Validation',
      icon: 'bi bi-check2-circle'
    },
    {
      name: 'Oracle DB',
      category: 'Database',
      icon: 'bi bi-database-fill'
    },
    {
      name: 'SOAP APIs',
      category: 'API Integration',
      icon: 'bi bi-arrow-left-right'
    },

    // Tools & Practices
    {
      name: 'Git',
      category: 'Version Control',
      icon: 'bi bi-git'
    },
    {
      name: 'GitHub',
      category: 'Version Control',
      icon: 'bi bi-github'
    },
    {
      name: 'Postman',
      category: 'API Testing',
      icon: 'bi bi-send'
    },
    {
      name: 'Data Structures & Algorithms',
      category: 'Computer Science',
      icon: 'bi bi-diagram-3'
    },
    {
      name: 'MVC Architecture',
      category: 'Architecture',
      icon: 'bi bi-layers'
    },
    {
      name: 'Code Review',
      category: 'Engineering Practice',
      icon: 'bi bi-search'
    },
    {
      name: 'Responsive Web Design',
      category: 'Web Development',
      icon: 'bi bi-phone'
    }
  ];
}
