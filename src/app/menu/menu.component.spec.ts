import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MenuComponent } from './menu.component';
import { LanguageService } from '../language.service';
import { ThemeService } from '../theme.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch language when selecting portuguese', () => {
    const languageService = TestBed.inject(LanguageService);

    component.setLanguage('pt-PT');
    fixture.detectChanges();

    expect(languageService.language()).toBe('pt-PT');
  });

  it('should switch theme when selecting light', () => {
    const themeService = TestBed.inject(ThemeService);

    component.setTheme('light');
    fixture.detectChanges();

    expect(themeService.theme()).toBe('light');
  });
});
