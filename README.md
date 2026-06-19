# Open Balcony 🌹🌿

A single-page website for our Open Balcony event — guests scan a QR code and browse plant info cards for the **Rose Garden** and **Lounge** balconies.

Live at: **https://bachdaniel.github.io/open-balcony/**

---

## How the page works

- Two balcony sections, each with a grid of plant cards
- Clicking a card opens a modal with the plant's name, description, and care tips
- Emoji placeholders are shown when an image hasn't been added yet
- The sticky nav highlights the active section as you scroll

---

## Adding / editing plants

All plant content lives in [`script.js`](script.js) — find the `plants` object near the top.

Each plant entry looks like this:

```js
{
  name: "Rosa Rugosa",
  botanical: "Rosa rugosa",       // optional — remove the line if not wanted
  emoji: "🌹",                    // shown if the photo is missing
  image: "images/rose-garden/rosa-rugosa.jpg",
  description: "A tough, fragrant rose that arrived as a cutting from my grandmother's garden three years ago.",
  care: {
    water: "Twice a week during dry spells",
    sun: "Full sun, 6+ hours",
    tips: "Deadhead spent blooms to encourage new flowers"  // optional
  }
}
```

**To add a plant:** copy the block above, paste it after the last entry in the right section (before the closing `]`), and fill in the values.

**To add a photo:** drop the image file into `images/rose-garden/` or `images/lounge/` and match the filename in `image:`.

---

## Editing the story

The "Getting Ready for Summer" section is plain text in [`index.html`](index.html) around line 42. Just edit the three `<p>` paragraphs to tell your own version.

---

## Deploying updates

```bash
git add .
git commit -m "Add plants"
git push
```

GitHub Pages picks up changes automatically within a minute or two.

---

## File structure

```
open-balcony/
├── index.html        ← page structure
├── style.css         ← all styling
├── script.js         ← plant data + interactivity
└── images/
    ├── rose-garden/  ← photos for balcony 1
    └── lounge/       ← photos for balcony 2
```

---

## GitHub Pages setup (first time only)

If Pages isn't enabled yet:  
GitHub repo → **Settings → Pages → Source: Deploy from branch → `master` / `(root)`** → Save
