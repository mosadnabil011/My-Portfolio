import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
  {
    title: 'Weather App',
    description: 'A simple app that shows current weather using OpenWeather API.',
    image: 'assets/weather.png',
    link: 'https://github.com/mosadnabil011/weather-API--UI'
  },
  {
    title: 'BMW Website',
    description: 'Designed and developed a static, non-responsive website for BMW, showcasing information about BMW models, electric cars, and lifestyle. Utilized HTML5 and CSS3 to create a structured layout with a fixed header, navigation menu, and interactiveelements.Implemented sections for Home, Models, Electric, BMW Lifestyle, and Contact with a modern design.',
    image: 'assets/bmw.png',
    link: 'https://mosadnabil011.github.io/BMW-WEB/'
  },
  {
    title: 'Perfume Website',
    description: 'Velvet Aura is a luxurious fragrance that captures elegance and sophistication in every drop. With top notes of jasmine and bergamot, a heart of rose and amber, and a warm base of vanilla and musk — it leaves a lasting impression of timeless beauty',
    image: 'assets/Perfume.png',
    link: 'https://mosadnabil011.github.io/project-1-HTML-CSS-/'
  }
];
}
