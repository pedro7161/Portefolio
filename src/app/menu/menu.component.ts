import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppLanguage, LanguageService } from '../language.service';
import { getPortfolioContent } from '../portfolio-content';
import { AppTheme, ThemeService } from '../theme.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  readonly content = computed(() => getPortfolioContent(this.languageService.language()));
  readonly currentLanguage = this.languageService.language;
  readonly currentTheme = this.themeService.theme;

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setLanguage(language: AppLanguage) {
    this.languageService.setLanguage(language);
    this.closeMenu();
  }

  setTheme(theme: AppTheme) {
    this.themeService.setTheme(theme);
    this.closeMenu();
  }
}
