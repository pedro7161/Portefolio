import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) lead!: string;
  /** When true renders the compact (h2 text-3xl) variant; default is the large (h2 text-4xl) variant. */
  @Input() compact = true;
}
