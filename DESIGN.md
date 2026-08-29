# DESIGN.md — StackCollectives Capstone Portfolio

## System
Bound **Industry** design system — steel-blue accent on a light technical ground, Barlow Condensed headings over Barlow, square corners, hairline borders, `+` registration marks on framed objects, duotone photography. Loaded via `ds-base.js` → `_ds/industry-43e42b3a-…/styles.css` + `_ds_bundle.js`. All colors/spacing/type via `var(--*)` tokens.

## Concept
The site reads as an **engineering drawing set**: the hero states the claim, "Sheet 01" is the team's datasheet, numbered sections (`02 ·`, `03 ·` …) follow the deck's kicker grammar, and "Sheet 02" is the programme's datasheet. A team selling engineering rigor is presented as an engineering document — the datasheet voice also sidesteps marketing-speak (per the brief: no buzzwords, no round fake metrics; every number is from a CV or the SUTD outreach PDF).

## Page grammar
- **24px leading unit** (12px half-step); section padding in unit multiples; `text-box: trim-both` on heads.
- **Kicker + caption rule** above every section: `NN · Title` in accent-700 caps over a 1px divider.
- **Plates** (spec sheets): hairline frame + registration crosses, title block with register cells, `.spec` table rows (№ / property / value / remark). Mobile: rows re-stack as small plates (template's collapse, kept verbatim).
- **Cells**: wireframe cards with corner marks, no fill — used for "why us" (3-up) and builds (2×2).
- **Member cards**: framed cell, duotoned square headshot flush to the frame top, then: name (Condensed 21px caps) → role kicker → intro → KEY SKILLS (square accent markers) → hairline foot with degree tag + LinkedIn. Grid `auto-fill minmax(250px, 1fr)` → 4/4/3-ish flow, 1-col on phones.
- **Timeline**: ruled two-column rows — date range (Condensed, tabular figures) | milestone + detail.
- **Skills matrix**: system `.table`, 3 columns (Domain / Tools & methods / Carried by), horizontal-scroll wrapper under 640px.
- The **only solid object** is the accent primary button (Email the team; one per cluster). Ghost buttons for the PDF.

## Imagery
All headshots pass through `.duotone` (desaturated, steel wash) inside the card frame — unifies mixed photo quality and follows the system's screen-print rule. `image-slot` components with stable ids so replacements can be dropped in the editor; Ryan's slot is empty with a labelled placeholder. **No AI-generated faces, no stock photos, no SVG illustration.**

## Type & ink
- Display: `clamp(48px→96px)` Condensed caps, per-sentence line breaks, −0.052em optical left.
- Small text in accent uses **accent-700** (5.8:1); 70% ink for furniture text; 78% for card body.
- Values in plates/foot tags use `tnum`.

## Voice
Plain engineering, matter-of-fact, first person plural ("we"). Claims carry their numbers and sources. Banned: passionate/innovative/cutting-edge/delve-class filler, invented testimonials, exact-round improvement claims.

## Files
```
index.html                  — the whole site (content + page CSS)
ds-base.js                  — DS loader (styles.css + bundle)
image-slot.js               — drop-slot component (vendored)
assets/StackCollectives_Capstone_Outreach.pdf
assets/team/{justin,yida,phelia,benedict,owen,edric}.webp   (ryan pending)
_ds/industry-…/             — design-system tokens + bundle
REQUIREMENT.md · DESIGN.md
```

## Deployment
GitHub Pages: push repo root, enable Pages on main. Vercel: import repo, framework = Other, no build command, output dir = root. Everything is relative-pathed; fonts load from the DS stylesheet. To update a headshot: overwrite the file in `assets/team/`. To update Edric's card: edit his `<article>` in `index.html` when his CV arrives.
