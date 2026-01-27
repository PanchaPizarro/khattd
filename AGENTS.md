# Repository Guidelines

## Project Structure & Module Organization
This is a static marketing site for the artist Khattd. Key files:
- `index.html`: Single-page HTML with all sections (hero, music, bio, contact).
- `styles.css`: Global styles, CSS variables, and animations.
- `script.js`: Client-side interactivity (menus, scroll effects, embeds).
- `khattd.png`: Primary image asset.

No build system or server code is present; edits are made directly in these files.

## Build, Test, and Development Commands
There is no build pipeline or test runner configured. To preview locally, use a static file server:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in a browser. If you use a different tool (Live Server, serve), keep the output purely static.

## Coding Style & Naming Conventions
- Indentation: 4 spaces in HTML/CSS/JS (follow existing files).
- CSS: prefer variables in `:root` for theme colors; use kebab-case class names (e.g., `.hero-stats`).
- JS: keep DOM queries and handlers grouped; avoid introducing frameworks.
- Assets: place images in the repo root or a dedicated folder if added later (e.g., `assets/`).

## Testing Guidelines
No automated tests are defined. If you add scripts, document manual checks:
- Layout and responsiveness (mobile/desktop).
- Navigation anchors and external links.
- Embedded media load states (e.g., Spotify embed).

## Commit & Pull Request Guidelines
This directory does not include a Git history, so there is no established commit convention. If you create commits, use clear, imperative summaries like:
- `Add updated hero stats`
- `Fix nav toggle on mobile`

For pull requests, include:
- A concise description of changes and affected sections.
- Screenshots of desktop and mobile views if UI changes are made.

## Configuration & Content Updates
Content updates are primarily in `index.html` (bio, stats, links) and `styles.css` (theme colors). Keep URLs, analytics IDs, and contact info accurate and consistent with the README guidance.
