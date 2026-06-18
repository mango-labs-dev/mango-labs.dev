---
name: Sudoku Zen
tagline: A calm, adaptive Sudoku with a hand-drawn soul.
category: Games
status: internal
featured: true
order: 1
accentColor: "#3d5836"
icon: ./icon.webp
iconGlyph: mdi:grid
iconColors:
  from: "#2e3e27"
  to: "#4a6438"
features:
  - icon: mdi:auto-fix
    title: Adaptive difficulty
    body: Puzzles tune themselves to how you actually play, not what you tap on a menu.
  - icon: mdi:meditation
    title: Zen mode
    body: A relax-first variant — no timer, no streaks, just the puzzle and a soft palette.
  - icon: mdi:draw-pen
    title: Hand-drawn aesthetic
    body: Material 3 with a paper-and-ink feel, designed to be easy on the eyes for long sessions.
  - icon: mdi:lightbulb-on-outline
    title: Smart hints
    body: Hints explain the technique, not just the digit — so you actually learn as you play.
  - icon: mdi:view-grid-outline
    title: Pick your grid
    body: Play classic 9×9, or quick 4×4 and 6×6 grids for a casual, low-pressure session.
  - icon: mdi:bell-outline
    title: Gentle reminders
    body: Optional on-device nudges to play the daily or pick up a paused game — capped, never pushy, and off by default.
packageId: dev.mangolabs.sudokuzen
minSdk: 31
targetSdk: 36
techStack:
  - Kotlin
  - Jetpack Compose
  - Material 3
  - Room
  - Hilt
policyUpdatedAt: 2026-06-18
---

Sudoku Zen is a Sudoku game built around two ideas: puzzles should adapt to *you*, and a great puzzle app should feel calm — never demanding.

The engine adapts difficulty by reading how you actually solve, not by what you select on a menu. Zen mode strips away streaks, leaderboards, and timers — so the game can be a five-minute breather without guilt.

<!-- TODO before release:
  - Add real screenshots to src/content/apps/sudoku-zen/screenshots/
  - Fill in playStoreUrl, publishedAt, version
  - Add icon image: src/content/apps/sudoku-zen/icon.webp (512x512)
-->
