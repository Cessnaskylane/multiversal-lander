# Cold Sheet — week lab 2026-09-16

**Direction:** Dark brand field (`#07090c`–`#0c1016`), glacier `#3D9BFF` hairlines/selection, ink `#e8eef4`, mute `#7a8694`. Calm / cold / precise — not neon cyberpunk. Phone-first **390×844**.

Self-improves yesterday’s **Night Dock** (`2026-09-15-night-dock`) and Glass Stack (`2026-09-14-glass-stack`).

---

## Why it should beat live Glass + Night Dock on iPhone

Live Glass is still an editorial desktop split squeezed to 390px. Night Dock fixed dark brand + thumb dock + contain 3:4, but **face and choices still share one scroll column** — the face can leave the thumb zone, and the dock floats as a frost bar *over* a scrolling stack (iOS-native feel is soft).

Cold Sheet upgrades **layout**, not lipstick:

1. **Sticky face header (~42–48%)** — face never scrolls away; `object-fit: contain` in a fixed 3:4 frame (no crop on toggle). Anchors identity while the thumb works the sheet.
2. **Bottom sheet panel** — frosted dark glass with rounded top + grab handle; all choices (model / verses / layer / celebs / skills / jobs) live in one-column rows (min ~52px). Only the sheet body scrolls.
3. **Dock integrated in sheet chrome** — Continue + Back sit in the sheet footer with safe-area, not a floating bar over mid-content. Clear one-thumb hierarchy.
4. YouTube remains a peer channel row with real avatar — not a fat desktop strip. Brief Albert frosted comment on Choose the Mind only.

Gates unchanged: no model / no verses → soft hint.

---

## Flow (one `index.html`)

1. Door — frost + Syne MULTIVERSAL + thin loader / tap → AI  
2. Choose the Mind — Grok / GPT / Claude / Gemini / DeepSeek (no default; gate)  
3. Select verses — X, TikTok, Instagram, YouTube (avatar), Email, www. (multi; gate)  
4. Three doors / layer — Celebrity / Skill / Upload  
5. Celebs list **or** skills **or** upload  
6. Verse jobs → job outcome  

Shot helpers: `?shot=door|model|verses|layer|celebs|skills`

---

## Paths

```
/workspace/multiversal-lander/mocks/week-lab/2026-09-16-cold-sheet/
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
    live-phone-compare.png   (optional)
```

Live lander `/workspace/multiversal-lander/index.html` untouched. No git commit / no Pages push.

---

## How to open

- `python3 -m http.server 8767 --directory /workspace/multiversal-lander/mocks/week-lab/2026-09-16-cold-sheet` → `http://127.0.0.1:8767/`
- Design target: **390×844**. Screenshots via `?shot=` + headless Chromium `--window-size=390,844`.
