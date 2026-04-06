import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { getPortfolioContent } from '../portfolio-content';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private readonly languageService = inject(LanguageService);

  readonly content = computed(() => getPortfolioContent(this.languageService.language()));
}
