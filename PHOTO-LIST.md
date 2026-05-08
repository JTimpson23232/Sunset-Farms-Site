# Sunset Farms / Photo Replacement Guide

Every image on the site is currently a high-quality Unsplash placeholder so the build looks finished tonight. When you have your own photos in hand, this is the punch list. Drop the new files into `/images/` and update each `<img src="...">` reference shown below.

Recommended specs:
- **Hero / page-hero backgrounds:** 2400x1600 px, JPG, ~85% quality, under 500 KB
- **Story / split images:** 1400x1750 px (4:5), JPG
- **Product cards:** 1100x1400 px (4:5), JPG
- **Recipe images:** 1600x1280 px (5:4), JPG
- **Color profile:** sRGB. Natural daylight. Documentary edit per the brand guidelines (slightly warm white balance, no over-saturation, keep some grain).

---

## index.html (Homepage)

| # | What we want | Current placeholder | Suggested filename |
|---|---|---|---|
| H1 | **Hero.** Golden hour shot of cattle on pasture with the Vermilion Cliffs / Arizona Strip in the background. Wide, cinematic. | Cattle at sunset on plain | `hero-pasture-sunset.jpg` |
| 1 | Hands holding fresh-pulled garden vegetables (carrots, greens). Documentary, dirt on hands ok. | Garden hands shot | `story-garden-hands.jpg` |
| 2 | Cuts of grass-fed beef on butcher paper, flat lay or counter shot | Beef cuts | `category-beef.jpg` |
| 3 | Heritage pork: chops, bacon, or whole hog on cutting board | Pork cuts | `category-pork.jpg` |
| 4 | Whole pasture-raised chicken on parchment / butcher paper | Whole chicken | `category-poultry.jpg` |
| 5 | Brown eggs in a wire basket on a wood counter | Egg basket | `category-eggs.jpg` |
| 6 | Mixed garden produce: tomatoes, squash, leafy greens | Garden harvest | `category-produce.jpg` |
| 7 | Honey jars with dipper, raw and amber | Honey | `category-pantry.jpg` |
| 8-10 | Three featured recipe shots (pot roast, ham, eggs) | Three food photos | `recipe-pot-roast.jpg`, `recipe-ham.jpg`, `recipe-eggs.jpg` |
| 11 | **Visit teaser.** Aerial of the property, or the country store at golden hour | Aerial farmland | `visit-teaser.jpg` |

---

## about.html (Our Story)

| # | What we want |
|---|---|
| A1 | **Page hero.** A family portrait at the farm gate, or the family working the property. The key emotional shot of the site. |
| A2 | Cattle grazing under red cliffs (the home pasture) |
| A3 | Old wooden barn with morning light |
| A4 | Hands holding fresh eggs (or the kids gathering eggs) |

---

## our-farm.html (The Farm / Practices)

| # | What we want |
|---|---|
| F1 | **Page hero.** Wide pasture shot under big sky |
| F2 | Black Angus or your actual herd grazing, close enough to see them |
| F3 | Heritage hogs rooting in pasture or orchard |
| F4 | The laying flock free-ranging, late afternoon golden light |
| F5 | Rows in the kitchen garden, hose, drip lines, in season |

---

## delivery.html (How It Works)

| # | What we want |
|---|---|
| D1 | **Page hero.** Wooden farm crates stocked with produce / a delivery box being packed |
| D2 | Butcher paper packages of beef neatly stacked in a cooler or on a table |

---

## recipes.html (Recipes index)

| # | What we want |
|---|---|
| R1 | **Page hero.** Wide farmhouse table shot, wood, warm light, food on it |
| R2-R10 | Nine recipe images. Replace as you cook each recipe and shoot it. |

---

## recipes/sunday-pot-roast.html
- **Hero:** Pot roast in a Dutch oven, wide split shot, hands holding tongs, steam, herbs visible.
- Same image used in featured slot on `recipes.html`. Keep filenames consistent so a single swap covers both.

## recipes/honey-glazed-ham.html
- **Hero:** Ham steak in cast iron, glaze glistening, chives on top.

## recipes/farmhouse-eggs.html
- **Hero:** Soft-scrambled eggs piled on toast, butter, chives, side angle.

---

## visit.html

| # | What we want |
|---|---|
| V1 | **Page hero.** The country store front (with the screen door if it's a real screen door), or a wide golden-hour shot of the property entrance |

---

## pigs-for-sale.html (NEW: Facebook Ad Landing Page)

| # | What we want |
|---|---|
| P1 | **Hero.** Heritage hogs in pasture or orchard, late-day light. Friendly, healthy, real. |
| P2 | The cut breakdown shot. Butcher-paper packages laid out: bacon, chops, hams, sausage, etc. Top-down. |
| P3 | A piglet or pasture shot, secondary trust photo |
| P4 | Signed butcher-cut sheet with checkmarks (or a tidy clipboard shot) |
| P5 | A full freezer stocked with labeled packages |

---

## Personal items to add (when you've got them)

You said "personal items," here's where they slot best:

1. **A real signature** scan to replace "The Sunset Farms family" text on `index.html` and `about.html`. Save as `signature.png` (transparent background) and swap into the `.signature` element.
2. **Family/owner names.** Currently the copy intentionally says "the family" because the original site doesn't list names. If you want to add real first names, the right place is the "A note from our family" block on the homepage and the `about.html` long-form section.
3. **Year founded month-day.** Currently "February 2005" per the existing About page. Update if you want a more specific founding date.
4. **Hours.** I made educated guesses (Tue-Sat). Confirm with the family and update on `delivery.html` and `visit.html`.
5. **Delivery zones.** I drafted Centennial Park / Colorado City / Hildale (Wed) and St. George / Hurricane / Cedar City (Sat) based on the location. Replace with the actual route.
6. **Pricing/items in the store.** Pricing currently lives only in GrazeCart. The site copy doesn't quote prices on purpose so the marketing site never needs to be updated when prices change.
7. **A "meet the family" photo block** with first names on `about.html` would be powerful. There's room for it under the "A note on faith and family" section if you want to add a portrait grid.
8. **Half / whole hog pricing.** The new pigs-for-sale.html page uses placeholder pricing. Update before running the Facebook ad.

---

## Where the brand mark / favicon live

- `images/favicon.svg` is the icon (sunburst + pasture)
- All inline SVG marks in the headers and footers are also live (search the HTML for `class="brand__mark"`). If you commission a real logo file, replace the inline SVG block with `<img src="images/logo.svg" class="brand__mark">` and that single change updates every page.

---

## Product category links (GrazeCart deep-linking)

Each category card and footer link uses a category-slug pattern under the GrazeCart store. Currently set to:

- Beef: `/store-landing-page/category/beef`
- Pork: `/store-landing-page/category/pork`
- Poultry: `/store-landing-page/category/poultry`
- Eggs & Dairy: `/store-landing-page/category/eggs-dairy`
- Garden Produce: `/store-landing-page/category/produce`
- Honey & Pantry: `/store-landing-page/category/pantry`

If your GrazeCart uses different slugs (anchors like `#beef`, query strings, or a different URL structure), do a project-wide search-replace to update all instances at once. Each link is consistent across pages and footers.

---

Built by Timpson Marketing. Questions: joseph@agriculturemarketingagency.com
