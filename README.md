# Portefolio

A modern, responsive personal portfolio website built with Angular. Features bilingual content (English and Portuguese), dark/light theme support, and a clean architecture designed for easy updates and customization.

**Live:** https://github.com/pedro7161/Portefolio

## Overview

Portefolio is a standalone Angular application that showcases professional experience, education, skills, certifications, and projects. It's designed as a professional CV/resume alternative that lives on the web with an interactive, modern interface. The portfolio is fully customizable and deployable to GitHub Pages.

## Features

- **Bilingual Support:** Seamless switching between English and Portuguese with localStorage persistence
- **Theme Support:** Dark and light modes with automatic system preference detection
- **Responsive Design:** Mobile-first approach using Bootstrap 5 for accessibility across devices
- **Modern Angular:** Standalone components, signals API, and computed properties for reactive state management
- **Customizable Content:** Centralized portfolio data structure for easy updates
- **Professional Sections:**
  - Experience timeline with companies, roles, and highlights
  - Education history across multiple institutions
  - Licenses and certifications
  - Grouped skill categories
  - Featured projects with live links and repositories
  - Quick contact information

## Tech Stack

**Framework & Build:**
- Angular 17.2 with standalone components
- TypeScript 5.3
- Angular CLI 17.2.3

**Styling & UI:**
- Bootstrap 5.3
- CSS3 with custom theme variables
- Responsive grid and component system

**State Management:**
- Angular Signals API (reactive primitives)
- Computed properties for derived state
- Services with dependency injection

**Testing:**
- Karma test runner
- Jasmine test framework
- Chrome and Firefox launchers

**Deployment:**
- GitHub Pages via `angular-cli-ghpages`
- Production build optimization and hashing

## Installation

### Prerequisites
- Node.js 18+ and npm 9+
- Angular CLI 17.2.3 (or install globally with `npm install -g @angular/cli@17.2.3`)

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/pedro7161/Portefolio.git
   cd Portefolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`. The app will reload automatically when you modify source files.

## Project Structure

```
Portefolio/
├── src/
│   ├── app/
│   │   ├── home/                    # Hero section and main profile view
│   │   ├── projects/                # Projects showcase page
│   │   ├── contact/                 # Contact form component
│   │   ├── menu/                    # Navigation menu and theme/language toggles
│   │   ├── future/                  # Future features placeholder
│   │   ├── html-form/               # Form component (deprecated route)
│   │   ├── app.component.ts         # Root component with routing
│   │   ├── app.routes.ts            # Route definitions
│   │   ├── app.config.ts            # Application configuration
│   │   ├── language.service.ts      # Language state management
│   │   ├── theme.service.ts         # Theme state management
│   │   └── portfolio-content.ts     # Centralized portfolio data and interfaces
│   ├── styles.css                   # Global styles with CSS custom properties
│   ├── index.html                   # HTML entry point
│   └── main.ts                      # Bootstrap entry point
├── dist/                            # Build output (production)
├── angular.json                     # Angular CLI configuration
├── tsconfig.json                    # TypeScript configuration
├── karma.conf.cjs                   # Test runner configuration
└── package.json                     # Dependencies and scripts
```

### Key Directories Explained

- **app/**: Contains all feature components and services
  - `*Component.ts`: Standalone components with embedded templates and styles
  - `*.service.ts`: Singleton services managing application state
  - `portfolio-content.ts`: Single source of truth for all content data (experience, education, skills, projects)

## Services & Architecture

### Language Service (`language.service.ts`)
Manages application language state with localStorage persistence and system language detection.

**Key methods:**
- `setLanguage(language)`: Switch between 'en' and 'pt-PT'
- `language()`: Signal providing current language
- `isPortuguese`: Computed boolean for conditional rendering

**Behavior:** On first visit, detects browser language (Portuguese defaults to 'pt-PT'), otherwise defaults to English.

### Theme Service (`theme.service.ts`)
Manages dark/light theme state and applies changes to the DOM via data attributes.

**Key methods:**
- `setTheme(theme)`: Switch between 'dark' and 'light'
- `theme()`: Signal providing current theme
- `isDark`: Computed boolean for conditional styling

**Behavior:** Applies theme to `document.documentElement.dataset['theme']` for CSS-based theming.

### Portfolio Content (`portfolio-content.ts`)
Centralized data store containing all portfolio information in both languages. Implements localized interfaces that support bilingual content.

**Exports:**
- `getPortfolioContent(language)`: Returns fully resolved portfolio content for a given language
- Interface definitions for all data structures (TimelineEntry, EducationEntry, etc.)
- Static content arrays (EXPERIENCE, EDUCATION, CERTIFICATIONS, etc.)

## Customization

### Updating Portfolio Content

All portfolio content is defined in `/src/app/portfolio-content.ts`. This is a single file containing:

**1. Experience Timeline**
Edit `EXPERIENCE` array to add/remove work history. Each entry includes:
- Job title and company
- Employment type (Full-time, Internship, etc.)
- Period and location
- Summary and highlights

**2. Education**
Edit `EDUCATION` array with degrees, schools, and periods.

**3. Certifications**
Edit `CERTIFICATIONS` array with license information and expiration dates.

**4. Skills**
Edit `SKILL_GROUPS` to organize skills by category (Frontend, Backend, Tools, Creative).

**5. Projects**
Edit `PROJECTS` array to showcase work with descriptions, impact statements, and links.

**6. Contact Information**
Edit `CONTACTS` array and `PORTFOLIO_LINKS` to update social links and contact details.

**7. UI Copy**
Modify the `COPY` object to change all user-facing text (headers, descriptions, button labels) in both English and Portuguese.

### Adding New Components

Generate a new standalone component:
```bash
ng generate component feature-name
```

Import and declare in `app.routes.ts` to add a new route.

### Styling Customization

Global styles are in `/src/styles.css`. The design uses CSS custom properties (CSS variables) for theming:

```css
:root[data-theme="light"] {
  --color-background: #ffffff;
  --color-text: #000000;
  /* ... more variables */
}

:root[data-theme="dark"] {
  --color-background: #1a1a1a;
  --color-text: #ffffff;
  /* ... more variables */
}
```

Modify these variables to customize the entire color scheme.

## Deployment

### Build for Production

```bash
npm run build
```

Build artifacts are stored in the `dist/portefolio/` directory.

### Deploy to GitHub Pages

Prerequisite: Ensure `baseHref: "/Portefolio/"` is set in `angular.json` (already configured).

```bash
npm run deploy
```

This uses `angular-cli-ghpages` to deploy the production build directly to GitHub Pages. Your portfolio will be live at `https://yourusername.github.io/Portefolio/`.

### Deploy to Other Platforms

**Netlify:**
- Set build command: `npm run build`
- Set publish directory: `dist/portefolio`

**Vercel:**
- Set build command: `npm run build`
- Set output directory: `dist/portefolio`

**Docker (example Dockerfile):**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/dist/portefolio /usr/share/nginx/html
COPY --from=build /app/angular.json /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Workflow

1. **Run the dev server:** `npm start`
2. **Make changes** to components or data in `portfolio-content.ts`
3. **Test manually** in the browser
4. **Run tests:** `npm test`
5. **Build for production:** `npm run build`

### Code Style

- Use Angular 17+ standalone components
- Follow TypeScript strict mode
- Prefer signals for state management
- Keep components focused and reusable

## Available Scripts

```bash
npm start          # Start dev server at localhost:4200
npm run build      # Production build to dist/
npm run watch      # Watch mode build (development)
npm test           # Run unit tests via Karma
npm run deploy     # Deploy to GitHub Pages
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source. See the LICENSE file for details.

---

**Built with Angular 17** | Deployed to GitHub Pages | Bilingual | Dark Mode Support
