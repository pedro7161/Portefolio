import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  navSub = ["none", "none"];
  pos = 0;

  opensub(pos: number) {
    console.log('dec');
    if (this.navSub[pos] == "block") {
      this.navSub[pos] = "none";
    } else {
      this.navSub[pos] = "block";
    }
  }
}
