import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HtmlFormComponent } from '../html-form/html-form.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,HtmlFormComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  navSub = ["none","none"];
  pos=0;
  
  opensub(pos: number) {
    console.log('dec');
    if (this.navSub[pos] == "block") {
      this.navSub[pos] = "none";
    } else {
      this.navSub[pos] = "block";
    }
  }
  

}
