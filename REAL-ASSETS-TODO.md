# Sunset Farms / Real Assets To Save

You sent two real images in chat. The site code already references them at the paths below. **You need to save those two images to disk before opening the site, or the brand mark and homepage hero will show broken images.**

---

## Step 1. Save the two images you sent

In the chat, right-click each image and "Save image as..." Save them with these exact filenames into `sunset-farms-site/images/`:

| Image you sent | Save to this exact path |
|---|---|
| The full-color logo (sun, farmer + child, barn, "Sunset Farms" wordmark, white background) | `sunset-farms-site/images/logo.png` |
| The entrance-gate sunset photo (silhouette of man + child standing under the arched sign, fiery sky, farm in the distance) | `sunset-farms-site/images/farm-gate-sunset.jpg` |

Once they're in place, refresh the homepage and they'll appear:
- The logo lives in the top-left of every page header
- The gate photo is the homepage hero AND the visit-page hero AND the OG share image

---

## Step 2. Optional polish: provide a white version of the logo

Your logo has black silhouettes on a white background. The site footer has a dark green background. Right now the footer still uses an inline SVG version of the brand mark in cream so it reads on the dark background.

If you want footer-perfect brand consistency, send a **knockout / white version** of the logo (white silhouettes on transparent background). Save it as `images/logo-white.png` and we'll swap the footer SVG for it.

Not urgent. The current footer SVG visually echoes your logo composition (sun + farmer + child + barn) so brand reads coherently as-is.

---

## Photo audit / what was fixed in this pass

Two real bugs caught and fixed:

1. **Pigs landing page story image** previously used a cattle photo. Swapped to a hogs-in-pasture shot.
2. **Homepage visit teaser** was using the same garden-hands photo as the story split. Swapped to a farm-stand sunset shot.

---

## Photo quality / what still needs your photos

The following images are still high-quality Unsplash placeholders. They visually match the descriptions, but they aren't your farm. For a press-ready, "I'm proud to send this" version, replace each with your own photography. Suggested specs: 1400 to 2400 px wide, JPG, sRGB, ~85% quality, under 500 KB each.

### Highest priority replacements (everyone sees these)

| File | Spot | What to shoot |
|---|---|---|
| `images/category-beef.jpg` | Homepage beef product card | Cuts of your beef on butcher paper or a beautiful steak about to hit the grill |
| `images/category-pork.jpg` | Homepage pork product card | Bacon and chops fanned out, or a butcher-paper package shot |
| `images/category-poultry.jpg` | Homepage poultry card | A whole pasture-raised bird on parchment |
| `images/category-eggs.jpg` | Homepage eggs card | Brown eggs in a wire basket on a wood counter |
| `images/category-produce.jpg` | Homepage produce card | What's in the garden this week, casually arranged |
| `images/category-pantry.jpg` | Homepage pantry card | Honey jars + dipper, jam, market goods |
| `images/recipe-pot-roast.jpg` | Homepage + recipes index + recipe page | Pot roast in a Dutch oven, hands holding tongs, herbs |
| `images/recipe-ham.jpg` | Same | Honey-glazed ham steak in cast iron, glaze glistening |
| `images/recipe-eggs.jpg` | Same | Soft-scrambled eggs on toast, butter melting |

### Page hero shots (one per page, big visual impact)

| File | Page | What to shoot |
|---|---|---|
| `images/farm-gate-sunset.jpg` | Homepage + Visit | DONE / your real gate photo |
| `images/about-hero.jpg` | About | A family portrait at the farm gate, or the family doing real work |
| `images/farm-hero.jpg` | The Farm | Wide pasture shot under big Arizona sky |
| `images/delivery-hero.jpg` | How It Works | Wooden crates of produce / a delivery box being packed |
| `images/recipes-hero.jpg` | Recipes | Wide farmhouse table shot with food on it, warm light |
| `images/pigs-hero.jpg` | Pigs landing page | Heritage hogs in pasture, late afternoon light |

### Story / context shots (smaller but still seen)

| File | Where | What to shoot |
|---|---|---|
| `images/story-garden-hands.jpg` | Homepage story split | Hands holding fresh-pulled vegetables, dirt on hands ok |
| `images/visit-teaser.jpg` | Homepage visit section | The country store front, screen door, golden hour |
| `images/about-cattle.jpg` | About gallery | Cattle grazing under the cliffs |
| `images/about-barn.jpg` | About gallery | Barn with morning light |
| `images/about-eggs.jpg` | About gallery | Hands gathering eggs |
| `images/farm-cattle.jpg` | The Farm beef section | Your actual herd grazing |
| `images/farm-pigs.jpg` | The Farm pork section | Your hogs in their paddock |
| `images/farm-chickens.jpg` | The Farm poultry section | Free-range layers, late afternoon |
| `images/farm-garden.jpg` | The Farm garden section | Rows in the kitchen garden |
| `images/share-cooler.jpg` | Delivery (half/whole share) | Butcher-paper packages stacked in a cooler |

### Photo style guide (so the photos feel like one farm)

- Natural daylight. Avoid harsh midday sun. Golden hour or overcast wins.
- Documentary, not staged. Hands, dirt, sweat, weather.
- Slightly warm white balance.
- No heavy filters or saturation boosts.
- Some grain is fine; we're not selling cosmetics.
- The aesthetic to match: think Belcampo, Polyface, Joyce Farms photo libraries. Real, grounded, beautiful.

---

## Quality checklist before you send the site to anyone

1. [ ] `images/logo.png` is in place and the brand mark reads correctly on every page
2. [ ] `images/farm-gate-sunset.jpg` is in place and the homepage and visit hero look right
3. [ ] Resize the gate photo to ~2400px wide, ~500 KB if it's a big phone-shot original (so it loads fast)
4. [ ] Open all 11 pages in a browser at desktop and mobile width (375px). Confirm nothing looks broken.
5. [ ] Walk through the pigs landing page on mobile end to end. Click every CTA. Make sure every reserve button goes where you want it to go (currently `/store-landing-page/category/pork`). Update to your actual GrazeCart half-hog SKU URL before launching the FB ad.
6. [ ] Confirm prices on `pigs-for-sale.html` ($499 half / $899 whole / $99 deposit). Update if different.
7. [ ] Confirm hours on `delivery.html` and `visit.html` (currently Tue to Sat).
8. [ ] Confirm delivery zones in the FAQ on `delivery.html` and `pigs-for-sale.html`.
9. [ ] Optional: provide a knockout/white version of the logo for the dark green footer.
10. [ ] Optional: replace any of the Unsplash placeholders above with real farm photography.

---

Built by Timpson Marketing. Questions: joseph@agriculturemarketingagency.com
