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
- **Cells**: wireframe cards with no fill, used for "Why partner with us" (three across) and selected projects (two across). Project titles link to their poster or slides (PDF, new tab); a small caps link at the foot of a cell ("See more", "Try the web app") leads elsewhere.
- **Team**: a row of seven circular portraits with first names (names are visually hidden on phones). Selecting one opens that member's card, centred below the row; one card shows at a time. The card has the photo on the left (on top on phones), then name, role, a "See less" control, intro, key skills, and a foot with LinkedIn, resume and a degree tag linking to the CSD or EPD curriculum. Portraits are links to the cards (`#member-<name>`), so a deep link opens that card and, without JavaScript, every card shows.
- **Timeline**: ruled rows with the date range on the left and the milestone on the right.
- **Showcase strip**: three ruled links to past SUTD Capstone showcases, newest first.
- **Buttons**: the accent primary button is the only solid fill on the page; secondary actions use ghost buttons.

## Motion

Motion is limited to the load-in, the partner reel and responses to user actions.

- **Load-in**: registration crosses converge on the wordmark, the title scans in, a hairline plots across with a percentage counter, then the sheet fades into the page. It is pure CSS, ends by 1.5s and never blocks input.
- **Partner reel**: two identical runs of logos drift left under an edge-fade mask, one run per 45s. Hovering the logos pauses the reel; hovering the square arrow at either end runs it six times faster in that direction, with speed changes eased. Logos are greyscale at rest and full colour on hover. Pointing at (or tapping) a logo opens a framed callout above it, with a hairline leader down to the logo, saying what the team did there; it flips below the reel when there is no room under the nav. The callout text lives in a visually hidden span on each logo, so screen readers get it too. The reel script drives this; without JavaScript a CSS animation runs instead, and the arrows are hidden on touch screens.
- **Team cards**: opening a card, the portrait flies from its bubble into the card's photo slot and squares off (460ms). The frame then unrolls from the photo and the text fades in, ending by about 0.76s. Closing reverses this: the text fades, the frame rolls back to the photo, and the portrait flies home. Switching members sends one portrait home while the next flies in. The space below eases to the new height throughout. A click mid-animation snaps to the end state and starts the next change; Escape closes the open card.
- **Reduced motion**: the loader is skipped, the reel stops and becomes a single scrollable run, and the card animation is disabled.

## Content rules

- Every claim about a member must trace to their CV or public LinkedIn profile. No invented clients, metrics or testimonials.
- Programme terms and dates come from SUTD's Capstone pages and the Capstone Office's student-initiated briefing.
- Write plainly in the first person plural ("we"), and give numbers with their source.
- Small accent text uses accent-700 for contrast; secondary text uses the ink at 70% and card body text at 78%.
