import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LanguageService } from './language.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  readonly content = this.languageService.content;
  readonly currentTheme = this.themeService.theme;
  readonly title = 'Pedro Pinto Portfolio';
}
