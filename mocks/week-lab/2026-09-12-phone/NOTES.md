# Week lab · 2026-09-12-phone — phone-first lander alternatives

Designed **390×844 first**. Color scheme unlocked (not Magma MULTI / pink-only). Brand feel kept: calm, slightly cold, precise. Promise: “A named voice you put on Grok.” Multiversal (not Multiverse). No Marvel IP.

Andy rejected Look A (door corridor) and Look B (liquid/gravity lens) as not better on iPhone. These three beat live `multiversal.ai` on mobile by vertical one-thumb flow, big tap targets, and clear face-vs-choice hierarchy.

---

## Look 1 — Stories / reel stack
`look-1-stories-reel.html`  
**Palette:** cold silver (`#c8d0d8`) on near-black + ice blue accent (`#7ec8ff`) — not pink.

Why it beats live on iPhone:
- Full-bleed face per viewport; swipe-up for next voice — no horizontal chip corridor that clips on narrow screens.
- One primary CTA (“Put on Grok”) with 52px thumb target; hierarchy is face → name → tone → action.
- YouTube `@multiversalbots` is a later story card (not first viewport chrome), so product intent stays clear before social.

Screens: `look-1-phone-390x844.png`

---

## Look 2 — Single column dossier
`look-2-dossier.html`  
**Palette:** deep ink (`#070a0f`) + warm amber (`#e8a23a`) on warm paper text (`#f2ebe0`).

Why it beats live on iPhone:
- One voice per screen with big type and sparse chips — no multi-step tray fighting the portrait.
- Bottom sheet holds 4–6 names (expandable) with large rows; select without leaving the dossier context.
- YouTube sits naturally inside the sheet as a channel card — reachable but never steals the first viewport.

Screens: `look-2-phone-390x844.png`

---

## Look 3 — Split card (TikTok-ish, calmer)
`look-3-split-card.html`  
**Palette:** off-black (`#0a0a0a`) + chalk white (`#f4f1ea`) + committed lime accent (`#c8f542`).

Why it beats live on iPhone:
- Fixed 60/40 split (face / name+tone+CTA) fits one thumb posture; horizontal snap for next voice — one card at a time, nothing overflows.
- Clear hierarchy: face owns the top; copy + Put on Grok own the bottom — never both fighting mid-screen.
- YouTube channel card is one of the snaps (peer to voices), first-class without a fat stage strip.

Screens: `look-3-phone-390x844.png`

---

## Assets
Local under `assets/` (Syne 700, YT avatar, scenario webps, agent-face). Self-contained HTML/CSS/JS. Do not push to GitHub/Pages from this lab.
