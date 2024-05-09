import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HtmlFormComponent } from './html-form/html-form.component';
import { FutureComponent } from './future/future.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,HomeComponent,HtmlFormComponent,FutureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portefolio';
}
