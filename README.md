# MAIBOOK Python Tutorial Portal

## Overview
MAIBOOK is a static web app that presents a multi-part Python tutorial series. The site loads Markdown chapters on demand, converts them to HTML with `marked`, and applies syntax highlighting with `highlight.js`, giving learners an interactive documentation-style reading experience.

## Repository Layout
- `index.html` � Page shell that wires the table of contents, content area, and external libraries.
- `script.js` � Client-side loader that fetches Markdown files, normalizes code fences, and triggers syntax highlighting.
- `style.css` � Layout, typography, and syntax color palette for both light, mobile, and print contexts.
- `run.bat` � Helper script that starts a local `python -m http.server` instance and opens the site in a browser.
- `tutorial-00-README.md` � `tutorial-13-oop-design-patterns.md` � Lesson content covering Python fundamentals through object-oriented design patterns.

## Features
- Thirteen-chapter curriculum that progresses from Python basics to design patterns.
- Fixed table of contents for quick navigation with per-chapter routing via URL hashes.
- GitHub-flavored Markdown rendering with automatic code syntax highlighting.
- Responsive layout plus print styles for offline reading or note taking.
- Friendly local preview workflow using only Python's standard library HTTP server.

## Getting Started
1. Install Python 3.6 or later and ensure `python` (or `py`) is on your PATH.
2. Double-click `run.bat` or run it from a terminal: `run.bat [port]` (defaults to 8000).
3. When prompted, the script opens `http://localhost:<port>/index.html` in your default browser.
4. Navigate chapters from the left sidebar; the active chapter persists in the URL hash.

### Manual Preview (optional)
```powershell
python -m http.server 8000
# then visit http://localhost:8000/index.html in your browser
```

## Customizing Content
- Add or update Markdown chapters in the root directory; each file is referenced in `script.js`.
- To surface new chapters, append them to the `tutorials` array with `id`, `title`, and `filename`.
- Adjust styles in `style.css` to tweak typography, colors, or layout breakpoints.
- Replace the favicon/emoji markers once the encoding artifacts in `script.js` are corrected.

## Known Issues
- Some emoji markers in `script.js` are corrupted due to encoding issues and may not render as intended.
- `run.bat` contains stray `n` prefixes before certain commands; cleaning them up will improve reliability on Windows.

## License
Tutorial text is released under the MIT License (see `tutorial-00-README.md`). Contributions and improvements are welcome.
