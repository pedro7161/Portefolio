import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../language.service';
import { getPortfolioContent } from '../portfolio-content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly languageService = inject(LanguageService);

  readonly content = computed(() => getPortfolioContent(this.languageService.language()));

  isExternalLink(href?: string): boolean {
    return href?.startsWith('http') ?? false;
  }
}
