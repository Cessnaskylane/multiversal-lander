# Focus Deck — week lab 2026-09-18

**Direction:** Dark void (`#07090c`–`#0c1016`), **indigo/pearl** `#8B9CF7` accent, ink `#e8eef4`, mute `#7a8694`. Calm / cold / precise — not Magma, not pink-only, not neon cyberpunk. Phone-first **390×844**.

Self-improves yesterday’s **Chip Stage** (`2026-09-17-chip-stage`) and live Glass.

---

## Why Focus Deck should beat Chip Stage + live Glass on iPhone

Chip Stage still sandwiches: sticky ~76px identity chip + stage head + rows + dock. That burns vertical space and keeps mind pick as a dense list. Live Glass is still an editorial desktop split squeezed to 390px — crowded chips, soft CTA.

Focus Deck upgrades **layout**, not lipstick:

1. **Slim status strip** (~38px) — mark + selected mind name only. No fat identity chip; face lives in the choice UI (Albert overlay on Mind), so almost the full stage is for picking.
2. **Mind = full-bleed vertical snap deck** — each model is a large card (min ~140px, snap-scroll) with big title + short meta; one card owns the thumb zone instead of five cramped rows.
3. **Verses = 2×3 equal tap tiles** — all six platforms visible at once (X, TikTok, Instagram, YouTube, Email, www.). No horizontal discovery swipe. YouTube carries the real `@multiversalbots` avatar.
4. **Layer = three huge stacked doors** — Celebrity / Skill / Upload fill the stage as equal tap targets.
5. **Thin progress rail** under the strip (Mind → Verses → Layer) so you always know where you are without a fat header.
6. **Sticky thumb dock** — Continue + Back with safe-area (Night Dock / Chip Stage pattern).
7. **Indigo accent** — distinct from Chip Stage ice teal `#5EEAD4` and Cold Sheet glacier `#3D9BFF`.

Gates unchanged: no model / no verses → soft hint. Albert frosted comment only on Choose the Mind (brief fade; held visible in `?shot=model`).

Brand: Multiversal is the personality layer on a model engine (Grok under it, not a partner badge). Copy: “Choose the Mind” / layer language. Never “A named voice you put on Grok.” Never “explore infinite possibilities.”

---

## Flow (one `index.html`)

1. Door — frost + Syne MULTIVERSAL + thin indigo loader / tap → AI  
2. Choose the Mind — vertical snap deck (Grok / GPT / Claude / Gemini / DeepSeek; no default; gate)  
3. Select verses — 2×3 tiles; multi; gate  
4. Three doors / layer — Celebrity / Skill / Upload  
5. Celebs list **or** skills **or** upload  
6. Verse jobs → job outcome  

Shot helpers: `?shot=door|model|verses|layer|celebs|skills`

---

## Paths

```
/workspace/multiversal-lander/mocks/week-lab/2026-09-18-focus-deck/
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

- `python3 -m http.server 8770 --directory /workspace/multiversal-lander/mocks/week-lab/2026-09-18-focus-deck` → `http://127.0.0.1:8770/`
- Design target: **390×844**. Screenshots via `?shot=` + headless Chromium `--window-size=390,844`.
