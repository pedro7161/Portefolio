import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Pedro Pinto | Profile' },
  { path: 'projects', component: ProjectsComponent, title: 'Pedro Pinto | Projects' },
  { path: 'Home', redirectTo: '', pathMatch: 'full' },
  { path: 'html-form', redirectTo: '', pathMatch: 'full' },
  { path: 'future', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
