import { TestBed } from '@angular/core/testing';
import { ThemeService, AppTheme, isAppTheme } from './theme.service';

const STORAGE_KEY = 'portfolio-theme';

describe('ThemeService', () => {
  // Uses the real document: replacing DOCUMENT with a hand-made object breaks Angular's own
  // renderer during TestBed setup/teardown.
  const root = document.documentElement;

  function createService(): ThemeService {
    const service = TestBed.inject(ThemeService);
    TestBed.flushEffects(); // the DOM is updated from an effect()
    return service;
  }

  function setTheme(service: ThemeService, theme: AppTheme): void {
    service.setTheme(theme);
    TestBed.flushEffects();
  }

  beforeEach(() => {
    localStorage.clear();
    delete root.dataset['theme'];
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    localStorage.clear();
    delete root.dataset['theme'];
  });

  describe('initial theme', () => {
    it('defaults to dark and applies it to <html data-theme>', () => {
      const service = createService();
      expect(service.theme()).toBe('dark');
      expect(service.isDark()).toBeTrue();
      expect(root.dataset['theme']).toBe('dark');
    });

    it('restores a persisted light preference', () => {
      localStorage.setItem(STORAGE_KEY, 'light');
      const service = createService();
      expect(service.theme()).toBe('light');
      expect(root.dataset['theme']).toBe('light');
    });

    for (const invalid of ['invalid-theme', '', 'null', 'undefined', 'DARK', 'LIGHT']) {
      it(`ignores the invalid stored value "${invalid}"`, () => {
        localStorage.setItem(STORAGE_KEY, invalid);
        expect(createService().theme()).toBe('dark');
      });
    }
  });

  describe('setTheme', () => {
    it('updates the signal, the computed isDark, and the DOM', () => {
      const service = createService();

      setTheme(service, 'light');
      expect(service.theme()).toBe('light');
      expect(service.isDark()).toBeFalse();
      expect(root.dataset['theme']).toBe('light');

      setTheme(service, 'dark');
      expect(service.theme()).toBe('dark');
      expect(service.isDark()).toBeTrue();
      expect(root.dataset['theme']).toBe('dark');
    });

    it('persists the choice for the next visit', () => {
      const service = createService();
      setTheme(service, 'light');
      expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
    });

    it('keeps the last value after rapid changes', () => {
      const service = createService();
      service.setTheme('light');
      service.setTheme('dark');
      service.setTheme('light');
      TestBed.flushEffects();

      expect(service.theme()).toBe('light');
      expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
      expect(root.dataset['theme']).toBe('light');
    });

    it('still updates the signal and DOM when storage throws (quota exceeded)', () => {
      const service = createService();
      const setItem = spyOn(Storage.prototype, 'setItem').and.throwError('QuotaExceededError');

      expect(() => setTheme(service, 'light')).not.toThrow();
      expect(setItem).toHaveBeenCalledWith(STORAGE_KEY, 'light');
      expect(service.theme()).toBe('light');
      expect(root.dataset['theme']).toBe('light');
    });
  });

  it('exposes the theme as a read-only signal', () => {
    const service = createService();
    expect((service.theme as unknown as { set?: unknown }).set).toBeUndefined();
  });

  it('isAppTheme accepts only the two theme names', () => {
    expect(isAppTheme('dark')).toBeTrue();
    expect(isAppTheme('light')).toBeTrue();
    for (const value of ['Dark', '', null, undefined, 1]) {
      expect(isAppTheme(value)).toBeFalse();
    }
  });
});
