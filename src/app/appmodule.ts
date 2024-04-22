import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { MenuComponent } from './menu/menu.component';
import { HtmlFormComponent } from './html-form/html-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // Declare HomeComponent here
    MenuComponent,
    HtmlFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'html-form', component: HtmlFormComponent }
      // Add more routes here if needed
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
