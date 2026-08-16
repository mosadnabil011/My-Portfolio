import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

// This portfolio is a single-page app: every section (about, skills,
// projects, contact, experience) lives inside HomeComponent as an anchored
// <section id="..."> and the navbar scrolls to it. There is only one
// navigable route. Any unmatched path redirects back to the home page.
export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Mosaad Nabil Abokammer | Software Engineer' },
  { path: '**', redirectTo: '' },
];
