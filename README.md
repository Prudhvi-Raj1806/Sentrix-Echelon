Project Lumora — Static Prototype

This folder contains a fully static, animated prototype for Project Lumora by Team Akuno.

How to run
1. Open `index.html` in your browser (double-click or right-click -> Open with).
2. For local development with a simple server (recommended):

PowerShell:

```powershell
# from this project root
python -m http.server 5500
# then open http://localhost:5500
```

Files created
- `index.html` — main site
- `css/styles.css` — styles and layout
- `js/app.js` — animations and interactions
- `assets/*` — placeholder images (replace with real images)

Notes
- The cinematic loader uses GSAP (CDN). The orb animation and trail are built with SVG + GSAP.
- Logo upload is a client-side-only preview that updates the header logo.
- This is a front-end prototype. Analytics and dashboards are static/dummy data intended for integration.

