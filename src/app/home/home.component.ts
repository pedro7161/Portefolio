import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../language.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly languageService = inject(LanguageService);

  readonly content = this.languageService.content;

  isExternalLink(href?: string): boolean {
    return href?.startsWith('http') ?? false;
  }
}
