import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HtmlFormComponent } from './html-form/html-form.component';
import { FutureComponent } from './future/future.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'html-form', component: HtmlFormComponent },
    { path: 'future', component: FutureComponent }
];
