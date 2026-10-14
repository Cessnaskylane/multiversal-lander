# Night Dock — week lab 2026-09-15

**Direction:** Dark brand field (`#07090c`–`#0c1016`), one thin glacier accent (`#3D9BFF`). Calm / cold / precise — not neon cyberpunk. Phone-first 390×844.

**Palette:** void `#07090c` · field `#0c1016` · glass rows `rgba(255,255,255,.06)` · ink `#e8eef4` · mute `#7a8694` · glacier `#3D9BFF`

Copy: physicist who ships. Multiversal (not Multiverse). No Marvel IP. No “voice” / “named voice you put on Grok” / “explore infinite possibilities”. Platform vernacular on jobs (`Post a video`, `Post a story`, `Write a reply`).

---

## Why it should beat live Glass + Glass Stack on iPhone

Live `multiversal.ai` Glass is still an editorial desktop split squeezed to 390px: wrapping chips, face fighting mid-screen choices, CTA not locked in the thumb zone.

`2026-09-14-glass-stack` fixed hierarchy with face-first + vertical rows, but stayed **pale ice** — a DNA match to live Glass that can feel like the same product squeezed, and its thumb CTA sits in panel flow (can feel soft when the stack scrolls). Face used `cover` (crop risk).

Night Dock self-improves with **layout**, not lipstick:

1. **Sticky bottom DOCK** — Continue (~52px) + Back always pinned in the thumb zone, safe-area aware, with a dark frost bar. Hierarchy stays clear while rows scroll.
2. **Dark brand field** — matches Multiversal’s standing dark / thin-light brand stance; distinct from pale-ice Glass Stack so mobile feels native to the brand, not a light-mode port.
3. **Face contain 3:4** in a quiet dark frame (~50–54%) — no crop when toggling verses/minds; Einstein stays whole.
4. **Dark frosted glass rows** (min ~52px) — one column only; YouTube is a peer channel row with real avatar, not a fat desktop strip.
5. **Brief Albert frosted comment** on Choose the Mind — default mind / AlbertEinstein.ai — without crowding the phone canvas.

Gates unchanged vs Glass Stack: no model / no verses → soft hint.

---

## Flow (one `index.html`)

1. Door — frost + Syne MULTIVERSAL + thin loader / tap → AI  
2. Choose the Mind — Grok / GPT / Claude / Gemini / DeepSeek rows (no default; gate)  
3. Select verses — X, TikTok, Instagram, YouTube (avatar), Email, www. (multi; gate)  
4. Three doors / layer — Celebrity / Skill / Upload  
5. Celebs list **or** skills **or** upload  
6. Verse jobs → job outcome  

Shot helpers: `?shot=door|model|verses|layer|celebs|skills`

---

## Paths

```
/workspace/multiversal-lander/mocks/week-lab/2026-09-15-night-dock/
  index.html
  NOTES.md
  assets/
    agent-face.webp      → symlink to lander assets
    header-face.webp
    youtube-avatar.png   (from multiversal-brand/youtube/avatar-800.png)
    syne-latin-700.woff2
    scenarios/*.webp     → symlinks
  shots/
    01-door.png
    02-model.png
    03-verses.png
    04-layer.png
    live-phone-compare.png
```

Live lander `/workspace/multiversal-lander/index.html` untouched. No git commit / no Pages push.

---

## How to open

- **file://** — open `index.html` (Google Fonts need network; Syne local is bundled).  
- Or: `python3 -m http.server 8766 --directory /workspace/multiversal-lander/mocks/week-lab/2026-09-15-night-dock` → `http://127.0.0.1:8766/`  
- Design target: **390×844**.  
- Screenshots: `?shot=door` etc. with headless Chromium `--window-size=390,844`.
