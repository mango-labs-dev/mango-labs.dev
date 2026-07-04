---
name: Numbrix
tagline: Connect 1 to 81. Sounds easy. It isn't.
category: Games
status: upcoming
featured: true
order: 3
accentColor: "#4338ca"
icon: ./icon.png
iconGlyph: mdi:numeric
iconColors:
  from: "#ffd98e"
  to: "#f57d10"
features:
  - icon: mdi:vector-polyline
    title: A puzzle that's all logic
    body: No guessing. Every move follows from the last — once you see it.
  - icon: mdi:tune-variant
    title: Four difficulty tiers
    body: From breezy to brutal, with daily puzzles in each tier.
  - icon: mdi:undo-variant
    title: Forgiving by design
    body: Unlimited undo, gentle hints, and zero penalties for taking your time.
  - icon: mdi:trophy-outline
    title: Streaks without pressure
    body: Track your progress without feeling chased by a counter.
packageId: dev.mango.labs.numbrix
minSdk: 34
targetSdk: 36
techStack:
  - Kotlin
  - Jetpack Compose
  - Material 3
---

Numbrix is a number-path puzzle: place the numbers 1 through 81 so each consecutive pair sits in adjacent cells. Pure logic, zero arithmetic.

It scratches the same itch as Sudoku but plays differently — once you find the next move, you really see it.

<!-- TODO before release:
  - Confirm tagline reflects shipped version
  - Add screenshots, icon, playStoreUrl, publishedAt, version
-->
