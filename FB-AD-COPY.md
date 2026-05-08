# Sunset Farms / Half &amp; Whole Hog Facebook Ad Copy

Three full ad variants written to match `pigs-for-sale.html`. Each one tested against a different angle: scarcity, math, story. Run all three, kill the loser after 48 hours, scale the winner.

Landing page URL: `https://sunsetfarms.store/pigs-for-sale.html`

UTM template: append `?utm_source=facebook&utm_medium=cpc&utm_campaign=pigs-spring-2026&utm_content=[ad-name]` to every link so you can track which ad sent the conversion.

---

## Variant A. The Scarcity Angle

**Primary Text (above the image):**

```
6 half hogs left from this season's harvest.

Pasture-raised. Heritage breed. Cut, smoked, and packaged exactly the way you want it. Free local delivery to St. George, Cedar City, Hurricane, and the Strip.

About 80 lb of bacon, chops, sausage, and ham. A year of pork in one delivery. $499 all-in. $99 deposit holds yours.

Reserve before they're gone.
```

**Headline (below the image):**
`6 Half Hogs Available. Pasture-Raised. Reserve Yours.`

**Description:**
`$499 all-in. Cut to your spec. Free local delivery.`

**CTA Button:**
`Shop Now`

**Image direction:**
Heritage hogs in pasture, late afternoon light. Close enough to see they're real animals, not stock photography.

---

## Variant B. The Math Angle

**Primary Text:**

```
Grocery-store pork: $1,247 for the same cuts.
Sunset Farms half hog: $499.

Save $748. Eat better. Done.

Here's what you get for $499:
✓ ~12 lb bacon
✓ ~16 lb sausage (your spec)
✓ ~10 lb chops
✓ ~8 lb ham steaks
✓ ~10 lb roasts
✓ ~6 lb ribs
✓ ~12 lb ground

Plus lard, fatback, and soup bones if you want them.

All-in price. Cut to your spec. Vacuum-sealed and freezer-ready. Free local delivery.

We have 6 left. Reserve with $99 down.
```

**Headline:**
`Save $748 vs. the Grocery Store. Same Cuts. Better Pork.`

**Description:**
`Half hog: $499 all-in. Free local delivery. 6 left.`

**CTA Button:**
`Learn More`

**Image direction:**
Top-down flat lay of the cuts on butcher paper: bacon, chops, sausage links, ham steaks, ground packs, all labeled.

---

## Variant C. The Story Angle

**Primary Text:**

```
We've been raising hogs on this Arizona pasture since 2005.

Heritage breeds (Berkshire and Duroc crosses). Open paddocks, deep straw, dirt to root, water to wallow. They take a couple months longer than industrial pork.

The marbling tells you why we wait.

Right now we have 6 half hogs available from this batch. About 80 lb each, butchered to your spec by our local processor. $499 all-in, including custom cuts, smoking, and free local delivery.

If you've never bought a half hog before, we'll walk you through the cut sheet on the phone. Ten minutes. You'll know exactly what's going in your freezer.

Reserve with $99 down. Refundable until the cut sheet is finalized.
```

**Headline:**
`Pasture-Raised, Heritage Hogs. Cut to Your Spec.`

**Description:**
`A year of premium pork in your freezer. From $499.`

**CTA Button:**
`Shop Now`

**Image direction:**
The family at the gate, or hogs at golden hour. The "this is a real farm" shot.

---

## Targeting recommendations

**Geographic (must-have):**
- 60-mile radius around Centennial Park, AZ 86021 (covers AZ Strip, Washington County UT, Iron County UT, Mohave County AZ)

**Interests / behaviors:**
- Whole foods cooking
- Homesteading / sustainable living
- Organic food / clean eating
- Costco shoppers (people who buy in bulk)
- Cast iron cooking
- BBQ / smoking enthusiasts
- Joel Salatin / Polyface Farm fans
- "Buy local" / farm-to-table

**Age:** 28 to 65
**Income:** Top 50% of zip codes in target geo (people who can absorb a $499 purchase)
**Exclude:** People who recently engaged with a competing CSA / butcher box brand

---

## Budget / launch suggestion

- Start: $25/day per ad ($75/day total across 3 variants)
- 48 hours: kill the worst-performing variant
- Day 3 onward: $50/day on the winner, $25/day on the runner-up
- Goal: Cost-per-conversion under $40 (each conversion is a $99 deposit toward a $499 sale, so payback is fast)
- Conversion event: deposit completion (set up the GrazeCart pixel + Facebook Conversions API)

---

## Retargeting (set up day one)

- Audience 1: Visited pigs-for-sale.html, didn't convert. Run an "still thinking?" ad with a customer testimonial.
- Audience 2: Started checkout, didn't finish. Run an "your hog is still here" reminder, $5/day.
- Audience 3: Past customers (upload your email list). Run a "we have a fresh batch" ad to your warm list. These will be your highest-converting audience.

---

## Compliance / claims

Numbers used in the ads ($1,247 grocery comparison, ~80 lb half, etc.) are estimates. Add a small footnote in the body or LP that says "yields and prices are estimates; actual cuts depend on your spec and the individual animal." That keeps Facebook's claims policy happy.

We don't claim "organic," "USDA Organic," "Certified Humane," or any registered cert. We say "pasture-raised," "heritage breed," "non-GMO grain ration," "no hormones," "no routine antibiotics." All of those are accurate per the practices on the our-farm page.

---

## Things to confirm before launch

1. **Pricing.** $499 / $899 / $99 deposit are the placeholder numbers I used on the LP. Confirm or change.
2. **Inventory copy.** "6 halves, 2 wholes" is a guess. Update to actual counts before launch.
3. **Lead time.** "3 to 4 weeks" is a typical custom-processor turnaround. Confirm with your processor.
4. **Delivery zones in the FAQ.** Currently lists Centennial Park, Colorado City, Hildale, Apple Valley (Wed) and St. George, Hurricane, La Verkin, Cedar City (Sat). Confirm or update.
5. **GrazeCart deep link.** The reserve buttons currently point to `/store-landing-page/category/pork`. If GrazeCart has a single SKU for the half hog reservation, point them to that exact SKU URL instead so the deposit checkout is a one-click experience.
6. **Pixel + CAPI.** Make sure the Facebook Pixel fires on `pigs-for-sale.html` page view, on add-to-cart on GrazeCart, and on deposit completion. Conversion API on the back end so you don't lose attribution to iOS 14.

---

Built by Timpson Marketing. Questions: joseph@agriculturemarketingagency.com
