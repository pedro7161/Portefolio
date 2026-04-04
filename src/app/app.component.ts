import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LanguageService } from './language.service';
import { getPortfolioContent } from './portfolio-content';
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

  readonly content = computed(() => getPortfolioContent(this.languageService.language()));
  readonly currentTheme = this.themeService.theme;
  readonly title = 'Pedro Pinto Portfolio';
}
