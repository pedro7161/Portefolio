import { Injectable, computed, signal } from '@angular/core';

export type AppLanguage = 'en' | 'pt-PT';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly currentLanguage = signal<AppLanguage>(this.getInitialLanguage());

  readonly language = this.currentLanguage.asReadonly();
  readonly isPortuguese = computed(() => this.currentLanguage() === 'pt-PT');

  setLanguage(language: AppLanguage): void {
    this.currentLanguage.set(language);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }

  private getInitialLanguage(): AppLanguage {
    if (typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLanguage === 'en' || savedLanguage === 'pt-PT') {
        return savedLanguage;
      }
    }

    if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('pt')) {
      return 'pt-PT';
    }

    return 'en';
  }
}
