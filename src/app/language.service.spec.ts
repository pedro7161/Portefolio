import { TestBed } from '@angular/core/testing';
import { LanguageService, AppLanguage } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Reset navigator mock
    mockNavigator('en-US');
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  // ============================================================================
  // HAPPY PATH TESTS
  // ============================================================================

  describe('Happy Path - Language Selection', () => {
    it('should create the service', () => {
      expect(service).toBeTruthy();
    });

    it('should initialize with English as default language', () => {
      const newService = new LanguageService();
      expect(newService.language()).toBe('en');
    });

    it('should set language to Portuguese when requested', () => {
      // Arrange & Act
      service.setLanguage('pt-PT');

      // Assert
      expect(service.language()).toBe('pt-PT');
    });

    it('should set language to English when requested', () => {
      // Arrange
      service.setLanguage('pt-PT');

      // Act
      service.setLanguage('en');

      // Assert
      expect(service.language()).toBe('en');
    });

    it('should toggle between languages correctly', () => {
      // Arrange & Act
      service.setLanguage('pt-PT');
      expect(service.language()).toBe('pt-PT');

      service.setLanguage('en');
      expect(service.language()).toBe('en');

      service.setLanguage('pt-PT');

      // Assert
      expect(service.language()).toBe('pt-PT');
    });
  });

  describe('Happy Path - Computed Signal', () => {
    it('should return true for isPortuguese when language is pt-PT', () => {
      // Arrange & Act
      service.setLanguage('pt-PT');

      // Assert
      expect(service.isPortuguese()).toBe(true);
    });

    it('should return false for isPortuguese when language is en', () => {
      // Arrange & Act
      service.setLanguage('en');

      // Assert
      expect(service.isPortuguese()).toBe(false);
    });

    it('should update isPortuguese when language changes', () => {
      // Arrange & Act
      service.setLanguage('en');
      expect(service.isPortuguese()).toBe(false);

      service.setLanguage('pt-PT');

      // Assert
      expect(service.isPortuguese()).toBe(true);
    });
  });

  describe('Happy Path - Persistence', () => {
    it('should persist language to localStorage when set', () => {
      // Arrange & Act
      service.setLanguage('pt-PT');

      // Assert
      expect(localStorage.getItem('portfolio-language')).toBe('pt-PT');
    });

    it('should persist English language to localStorage', () => {
      // Arrange & Act
      service.setLanguage('en');

      // Assert
      expect(localStorage.getItem('portfolio-language')).toBe('en');
    });

    it('should load persisted language on initialization', () => {
      // Arrange
      localStorage.setItem('portfolio-language', 'pt-PT');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('pt-PT');
    });

    it('should restore Portuguese preference after service recreation', () => {
      // Arrange
      service.setLanguage('pt-PT');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('pt-PT');
    });

    it('should restore English preference after service recreation', () => {
      // Arrange
      service.setLanguage('en');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });
  });

  describe('Happy Path - Browser Language Detection', () => {
    it('should detect Portuguese from navigator.language when pt is prefix', () => {
      // Arrange
      mockNavigator('pt-BR');
      localStorage.clear();

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('pt-PT');
    });

    it('should detect Portuguese from navigator.language when pt-PT', () => {
      // Arrange
      mockNavigator('pt-PT');
      localStorage.clear();

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('pt-PT');
    });

    it('should detect Portuguese from navigator.language when pt', () => {
      // Arrange
      mockNavigator('pt');
      localStorage.clear();

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('pt-PT');
    });

    it('should use English as fallback when navigator language is English', () => {
      // Arrange
      mockNavigator('en-US');
      localStorage.clear();

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });

    it('should use English as fallback when navigator language is French', () => {
      // Arrange
      mockNavigator('fr-FR');
      localStorage.clear();

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });

    it('should prioritize localStorage over navigator language', () => {
      // Arrange
      localStorage.setItem('portfolio-language', 'en');
      mockNavigator('pt-PT');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });
  });

  // ============================================================================
  // EDGE CASES
  // ============================================================================

  describe('Edge Cases - Invalid Values in Storage', () => {
    it('should ignore invalid language value from localStorage', () => {
      // Arrange
      localStorage.setItem('portfolio-language', 'invalid-lang');
      mockNavigator('en-US');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });

    it('should ignore empty string in localStorage', () => {
      // Arrange
      localStorage.setItem('portfolio-language', '');
      mockNavigator('en-US');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });

    it('should ignore null-like string in localStorage', () => {
      // Arrange
      localStorage.setItem('portfolio-language', 'null');
      mockNavigator('en-US');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });

    it('should ignore undefined-like string in localStorage', () => {
      // Arrange
      localStorage.setItem('portfolio-language', 'undefined');
      mockNavigator('en-US');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });

    it('should handle case-sensitive validation for language codes', () => {
      // Arrange
      localStorage.setItem('portfolio-language', 'PT-PT');
      mockNavigator('en-US');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });

    it('should handle case-sensitive validation for English', () => {
      // Arrange
      localStorage.setItem('portfolio-language', 'EN');
      mockNavigator('en-US');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });
  });

  describe('Edge Cases - SSR/Missing Window', () => {
    it('should not throw when localStorage is undefined', () => {
      // Arrange
      const originalLocalStorage = (window as any).localStorage;
      Object.defineProperty(window, 'localStorage', {
        value: undefined,
        writable: true,
        configurable: true,
      });

      // Act & Assert
      try {
        expect(() => {
          service.setLanguage('pt-PT');
        }).not.toThrow();
      } finally {
        // Cleanup
        Object.defineProperty(window, 'localStorage', {
          value: originalLocalStorage,
          writable: true,
          configurable: true,
        });
      }
    });

    it('should handle setLanguage when localStorage is unavailable', () => {
      // Arrange
      const originalLocalStorage = (window as any).localStorage;
      Object.defineProperty(window, 'localStorage', {
        value: undefined,
        writable: true,
        configurable: true,
      });

      // Act
      try {
        service.setLanguage('pt-PT');

        // Assert
        expect(service.language()).toBe('pt-PT');
      } finally {
        // Cleanup
        Object.defineProperty(window, 'localStorage', {
          value: originalLocalStorage,
          writable: true,
          configurable: true,
        });
      }
    });

    it('should handle navigator.language being undefined safely', () => {
      // Arrange
      localStorage.clear();
      const originalNavigator = window.navigator;
      Object.defineProperty(window, 'navigator', {
        value: {},
        writable: true,
        configurable: true,
      });

      // Act & Assert
      try {
        expect(() => {
          new LanguageService();
        }).not.toThrow();
      } finally {
        // Cleanup
        Object.defineProperty(window, 'navigator', {
          value: originalNavigator,
          writable: true,
          configurable: true,
        });
      }
    });
  });

  describe('Edge Cases - Case Sensitivity in Navigator', () => {
    it('should handle uppercase PT in navigator.language', () => {
      // Arrange
      localStorage.clear();
      mockNavigator('PT-PT');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('pt-PT');
    });

    it('should handle uppercase PT prefix in navigator.language', () => {
      // Arrange
      localStorage.clear();
      mockNavigator('PT-BR');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('pt-PT');
    });

    it('should handle mixed case PT in navigator.language', () => {
      // Arrange
      localStorage.clear();
      mockNavigator('Pt-pt');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('pt-PT');
    });
  });

  // ============================================================================
  // ERROR CONDITIONS
  // ============================================================================

  describe('Error Conditions - localStorage Quota Exceeded', () => {
    it('should handle localStorage quota exceeded error gracefully', () => {
      // Arrange
      spyOn(Storage.prototype, 'setItem').and.throwError('QuotaExceededError');

      // Act & Assert — should NOT throw; degrades silently
      expect(() => {
        service.setLanguage('pt-PT');
      }).not.toThrow();

      // The language should still be updated in memory
      expect(service.language()).toBe('pt-PT');
    });

    it('should still update signal even if storage fails', () => {
      // Arrange
      const setItemSpy = spyOn(Storage.prototype, 'setItem').and.throwError(
        'QuotaExceededError'
      );

      // Act
      service.setLanguage('pt-PT');

      // Assert
      expect(service.language()).toBe('pt-PT');
      expect(setItemSpy).toHaveBeenCalledWith('portfolio-language', 'pt-PT');
    });
  });

  describe('Error Conditions - Corrupted localStorage Data', () => {
    it('should handle null returned from localStorage.getItem gracefully', () => {
      // Arrange
      localStorage.clear();
      mockNavigator('en-US');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });

    it('should treat unset localStorage key as no preference', () => {
      // Arrange
      localStorage.clear();
      mockNavigator('en-US');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('en');
    });
  });

  describe('Error Conditions - Multiple Rapid Updates', () => {
    it('should handle rapid language changes without race conditions', () => {
      // Arrange & Act
      service.setLanguage('pt-PT');
      service.setLanguage('en');
      service.setLanguage('pt-PT');

      // Assert
      expect(service.language()).toBe('pt-PT');
      expect(localStorage.getItem('portfolio-language')).toBe('pt-PT');
    });

    it('should persist the final language after rapid changes', () => {
      // Arrange & Act
      service.setLanguage('pt-PT');
      service.setLanguage('en');
      service.setLanguage('pt-PT');
      service.setLanguage('en');

      // Assert
      expect(service.language()).toBe('en');
      expect(localStorage.getItem('portfolio-language')).toBe('en');
    });
  });

  // ============================================================================
  // INTEGRATION TESTS
  // ============================================================================

  describe('Integration - Service Recreation with Persistence', () => {
    it('should maintain language preference across service instances', () => {
      // Arrange
      service.setLanguage('pt-PT');

      // Act
      const newService = new LanguageService();

      // Assert
      expect(newService.language()).toBe('pt-PT');
      expect(newService.isPortuguese()).toBe(true);
    });

    it('should update computed signal after language restoration', () => {
      // Arrange
      service.setLanguage('pt-PT');
      const newService = new LanguageService();

      // Act & Assert
      expect(newService.isPortuguese()).toBe(true);

      newService.setLanguage('en');
      expect(newService.isPortuguese()).toBe(false);
    });
  });

  describe('Integration - Readonly Signal Behavior', () => {
    it('should expose language as readonly signal', () => {
      // Assert
      expect(typeof service.language()).toBe('string');
      expect(service.language).toBeDefined();
    });

    it('should prevent direct modification of language signal', () => {
      // Assert
      // language() is a readonly signal, so it shouldn't have set method
      expect((service.language as any).set).toBeUndefined();
    });
  });

  describe('Integration - Computed Signal Reactivity', () => {
    it('should update isPortuguese computed signal reactively', () => {
      // Arrange
      expect(service.isPortuguese()).toBe(false);

      // Act
      service.setLanguage('pt-PT');

      // Assert
      expect(service.isPortuguese()).toBe(true);
    });

    it('should maintain correct computed value during signal updates', () => {
      // Arrange
      service.setLanguage('en');
      expect(service.isPortuguese()).toBe(false);

      // Act
      service.setLanguage('pt-PT');
      expect(service.isPortuguese()).toBe(true);

      service.setLanguage('en');

      // Assert
      expect(service.isPortuguese()).toBe(false);
    });
  });
});

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function mockNavigator(language: string): void {
  Object.defineProperty(window.navigator, 'language', {
    value: language,
    writable: true,
    configurable: true,
  });
}
