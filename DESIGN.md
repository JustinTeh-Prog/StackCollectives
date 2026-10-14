# Design notes

## Audience and purpose

The page is the team's pitch to managers and engineers at Singapore companies deciding whether to sponsor a Capstone project. Secondary readers are SUTD Capstone Office reviewers. A visitor should be able to see what the team can build, meet the members, see past work, understand the programme's terms and dates, and know how to get in touch.

## Design system

`assets/css/industry.css` holds the **Industry** system: a steel-blue accent (`#5980a6`) on a light technical ground (`#f2f2f3`), Barlow Condensed headings over Barlow body text, square corners and hairline borders. Take every colour, font, radius and shadow from its `var(--*)` tokens instead of hard-coding values. Page-specific CSS lives in the `<style>` block in `index.html`.

The page reads as an engineering drawing set:

- **Rhythm**: a 24px leading unit (`--leading`) with a 12px half-step (`--half`); section padding is a multiple of the unit.
- **Section heads**: a numbered kicker (`02 · Why partner with us`) in accent-700 caps over a 1px rule.
- **Framed objects** (`.plate`, `.cell-frame`, `.member`, the loader frame) carry `+` registration crosses at the corners: four `<i class="corner tl|tr|bl|br">` children.
- **Plate**: the "Working with us" spec table, with a title block and No. / Property / Value / Remark columns. Below 720px each row re-stacks as a small card.
- **Cells**: wireframe cards with no fill, used for "Why partner with us" (three across) and selected projects (two across).
- **Member cards**: square headshot, name, role, and a `<details>` panel with the intro, key skills, LinkedIn and resume links. The whole card toggles the panel; an open card spans two columns, and a FLIP animation slides the neighbouring cards into place.
- **Timeline**: ruled rows with the date range on the left and the milestone on the right.
- **Showcase strip**: three ruled links to past SUTD Capstone showcases, newest first.
- **Buttons**: the accent primary button is the only solid fill on the page; secondary actions use ghost buttons.

## Motion

Motion is limited to the load-in, the partner reel and responses to user actions.

- **Load-in**: registration crosses converge on the wordmark, the title scans in, a hairline plots across with a percentage counter, then the sheet wipes up. It is pure CSS, ends by 0.86s and never blocks input.
- **Partner reel**: two identical runs of logos slide −50% on a 45s loop under an edge-fade mask, and pause on hover. Logos are greyscale at rest and full colour on hover.
- **Reduced motion**: the loader is skipped, the reel stops and becomes a single scrollable run, and the card animation is disabled.

## Content rules

- Every claim about a member must trace to their CV or public LinkedIn profile. No invented clients, metrics or testimonials.
- Programme terms and dates come from SUTD's Capstone pages and the Capstone Office's student-initiated briefing.
- Write plainly in the first person plural ("we"), and give numbers with their source.
- Small accent text uses accent-700 for contrast; secondary text uses the ink at 70% and card body text at 78%.
