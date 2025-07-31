import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';

export const routes: Routes = [
  {path:'',component:HomeComponent,title:'home'},
  { path: 'about', component:AboutComponent,title:"about"},
  {path: 'skills', component:SkillsComponent,title:"skills" },
  {path: 'projects', component: ProjectsComponent,title:"projects" },
  {path: 'contact', component:ContactComponent,title:"contact" },
  {path: 'footer', component:FooterComponent,title:"footer" },
];
