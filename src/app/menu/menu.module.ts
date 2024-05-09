import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { HomeComponent } from '../home/home.component';
import { HtmlFormComponent } from '../html-form/html-form.component';
import { FutureComponent } from '../future/future.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    HtmlFormComponent,
    FutureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    HtmlFormComponent,
    FutureComponent
  ]
})
export class MenuModule { }
