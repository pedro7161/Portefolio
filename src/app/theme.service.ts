import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

export type AppTheme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'portfolio-theme';

export function isAppTheme(value: unknown): value is AppTheme {
  return value === 'dark' || value === 'light';
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly currentTheme = signal<AppTheme>(this.getInitialTheme());

  readonly theme = this.currentTheme.asReadonly();
  readonly isDark = computed(() => this.currentTheme() === 'dark');

  constructor() {
    effect(() => {
      this.applyTheme(this.currentTheme());
    });
  }

  setTheme(theme: AppTheme): void {
    this.currentTheme.set(theme);

    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch {
        // Quota exceeded or storage unavailable — signal and DOM are still updated
      }
    }
  }

  private applyTheme(theme: AppTheme): void {
    if (!isAppTheme(theme)) {
      return;
    }
    this.document.documentElement.dataset['theme'] = theme;
  }

  private getInitialTheme(): AppTheme {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (isAppTheme(savedTheme)) {
        return savedTheme;
      }
    }

    return 'dark';
  }
}
