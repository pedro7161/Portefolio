/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Use CSS variables for theming
        'bg-canvas': 'var(--bg-canvas)',
        'bg-surface': 'var(--bg-surface)',
        'header-bg': 'var(--header-bg)',
        'surface-card': 'var(--surface-card)',
        'surface-strong': 'var(--surface-strong)',
        'surface-hover': 'var(--surface-hover)',
        'border-soft': 'var(--border-soft)',
        'border-strong': 'var(--border-strong)',
        'text-main': 'var(--text-main)',
        'text-muted': 'var(--text-muted)',
        'text-faint': 'var(--text-faint)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-tertiary': 'var(--accent-tertiary)',
        'accent-contrast': 'var(--accent-contrast)',
        'tag-bg': 'var(--tag-bg)',
        'tag-border': 'var(--tag-border)',
        'button-secondary-bg': 'var(--button-secondary-bg)',
        'button-secondary-border': 'var(--button-secondary-border)',
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      backgroundImage: {
        'brand-gradient': 'var(--brand-gradient)',
        'hero-panel': 'var(--hero-panel-bg)',
        'hero-card': 'var(--hero-card-bg)',
        'page': 'var(--page-background)',
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
      },
      gridTemplateColumns: {
        'content': 'repeat(auto-fit, minmax(320px, 1fr))',
      }
    },
  },
  plugins: [],
}
