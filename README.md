# Huskeliste for hytta 🏔️

A seasonal cabin checklist — built as a simple, mobile-friendly web app for guests to work through before leaving the cabin.

## Features

- **Seasonal themes** — dark winter look (blue/starfield) and light summer look (green/sun), switched automatically by date
- **Seasonal checklist items** — winter-only arrival tasks (snow, shovels, firewood) and a summer-only departure task (close the sheep gate 🐑) are shown only when relevant
- **Progress bar** — tracks how many items have been checked off; count adjusts to the active season
- **Completion popup** — a modal appears when every item is checked
- **Click to toggle** — tap any item to mark it done; tap again to unmark

## Seasons

| Period | Theme | Active sections |
|---|---|---|
| Oct 16 – Apr 30 | Dark winter | Arrival (winter) + Departure |
| May 1 – Oct 15 | Light summer | Departure only (incl. sheep gate) |

## Development

```bash
npm install
npm start        # webpack dev server at http://localhost:8080
npm run build    # production build → dist/
```

### Testing a specific season

Append `?season=winter` or `?season=summer` to the URL to override the date check:

```
http://localhost:8080/?season=summer
http://localhost:8080/?season=winter
```

## Project structure

```
├── index.html          # markup and checklist content
├── js/
│   └── app.js          # season logic, progress tracking, modal
├── css/
│   └── style.css       # winter + summer themes
└── webpack.config.*.js # dev / prod build configs
```

## Adding checklist items

- **Year-round** — add a plain `<li>` inside any `.checklist`
- **Winter only** — add `class="winter-only"` to the `<li>` (or its parent section)
- **Summer only** — add `class="summer-only"` to the `<li>`

The progress counter picks up visible items automatically.
