# Chip Stage — week lab 2026-09-17

**Direction:** Dark brand field (`#07090c`–`#0c1016`), **ice teal** `#5EEAD4` hairlines/selection/loader, ink `#e8eef4`, mute `#7a8694`. Calm / cold / precise — not neon cyberpunk, not Magma/pink. Phone-first **390×844**.

Self-improves yesterday’s **Cold Sheet** (`2026-09-16-cold-sheet`) and Night Dock (`2026-09-15-night-dock`).

---

## Why it should beat live Glass + Cold Sheet on iPhone

Live Glass is still an editorial desktop split squeezed to 390px — crowded chips, soft CTA. Cold Sheet fixed dark brand + contain face + sheet dock, but the **sticky face header ate ~46% of height**, so the bottom sheet for choices felt cramped; nested sheet scroll + sheet-footer dock felt fiddly on one thumb.

Chip Stage upgrades **layout**, not lipstick:

1. **Compact identity chip** (~64–72px circular / small 3:4 contain) — sticky under the mark. Face never scrolls away, but frees most of the viewport for choices (vs Cold Sheet’s ~46% face).
2. **Full-height choice stage** — one-column large tap rows (min ~58px), frosted dark glass, generous spacing. No bottom-sheet sandwich.
3. **Sticky thumb dock** — Continue + Back as phone chrome (Night Dock pattern) with safe-area — not buried in a sheet footer.
4. **Verses as horizontal snap cards** — large platform cards you swipe (X / TikTok / Instagram / YouTube / Email / www.); YouTube includes the real `@multiversalbots` avatar. Multi-select feels native.
5. **Ice teal accent** — distinct from Cold Sheet glacier `#3D9BFF` and from live pink/blue thrash.

Gates unchanged: no model / no verses → soft hint. Albert frosted comment only on Choose the Mind.

---

## Flow (one `index.html`)

1. Door — frost + Syne MULTIVERSAL + thin teal loader / tap → AI  
2. Choose the Mind — Grok / GPT / Claude / Gemini / DeepSeek (no default; gate)  
3. Select verses — snap cards; multi; gate  
4. Three doors / layer — Celebrity / Skill / Upload  
5. Celebs list **or** skills **or** upload  
6. Verse jobs → job outcome  

Shot helpers: `?shot=door|model|verses|layer|celebs|skills`

---

## Paths

```
/workspace/multiversal-lander/mocks/week-lab/2026-09-17-chip-stage/
  index.html
  NOTES.md
  assets/
    agent-face.webp      → symlink
    header-face.webp
    youtube-avatar.png   → multiversal-brand/youtube/avatar-800.png
    syne-latin-700.woff2
    scenarios/*.webp     → symlinks
  shots/
    01-door.png
    02-model.png
    03-verses.png
    04-layer.png
```

Live lander `/workspace/multiversal-lander/index.html` untouched. No git commit / no Pages push.

---

## How to open

- `python3 -m http.server 8768 --directory /workspace/multiversal-lander/mocks/week-lab/2026-09-17-chip-stage` → `http://127.0.0.1:8768/`
- Design target: **390×844**. Screenshots via `?shot=` + headless Chromium `--window-size=390,844`.
