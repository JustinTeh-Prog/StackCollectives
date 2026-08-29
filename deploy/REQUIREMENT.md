# REQUIREMENT.md — StackCollectives Capstone Portfolio

## Purpose
A one-page team portfolio that fronts StackCollectives' outreach to prospective Singapore industry partners for SUTD's Capstone 2027 **student-initiated industry project** track. A company rep landing here should, within two minutes: understand what the team can build, meet the seven members, see proof of past work, understand the programme's terms and dates, and know exactly how to start the conversation.

## Audience
Managers / engineers at Singapore companies deciding whether to sponsor a capstone project. Secondary: SUTD Capstone Office reviewers.

## Hard constraints
- **Static site, `index.html` entrypoint** — deployable as-is to GitHub Pages and Vercel. No build step, no framework, no server code. Plain HTML/CSS/JS only.
- All assets referenced by **relative paths** (`assets/`, `_ds/`).
- Visual style: bound **Industry** design system (`_ds/industry-…/styles.css`); no invented colors/type.
- **No fabricated content.** Every claim about a member traces to their CV in `uploads/group_CV/` (or, for Edric Lum, his public LinkedIn trace). No invented clients, metrics, or testimonials — hence no quote section.

## Sections (in order)
1. **Nav** — brand + in-page anchors + contact button.
2. **Hero** — team name, motto ("Seven engineers. One working stack."), one-paragraph pitch, CTAs: *Email the team*, *Download Capstone Info PDF*.
3. **Team data sheet (plate 01)** — headline facts: 7 engineers; 5 prior engineering diplomas; 6 industry attachments (A*STAR, Xilinx, Griffin Labs, HTX, Certis, Changi Airport); 8-month project window (Sep 2027 – Apr 2028).
4. **Why partner with us** — 3 cells: whole stack in-house · evidence over adjectives · low friction (programme terms).
5. **The team** — 7 member cards: headshot, name, role, 1–2-sentence intro, KEY SKILLS list, degree tag, LinkedIn link. Roles cover: software/systems lead, AI/ML, mechanical design, embedded/PCB, electrical + project ops, research + fabrication, robotics software.
6. **Selected builds** — 4 real projects from the CVs: HERMES (Ento Industries, 98.6% accuracy), InVest, SensOri, ADL Data Acquisition (SG provisional patent 10202105829Q).
7. **The programme** — plate 02 with company-facing terms (S$6,000 fee; ≤ S$4,000 SUTD resources; IP belongs to partner; 2-term window) + 5-step timeline (link-up by 29 Jan 2027 → Project Form by 28 Feb 2027 → discussion Feb–Mar → agreement Apr–Jun → build Sep 2027–Apr 2028).
8. **Team skills, tabulated** — consolidated skills matrix (domain → tools → who carries it), placed **directly before contact**.
9. **Contact desk** — mailto CTA + PDF download + footer (Capstone Office email, SUTD showcase link).

## Links registry
- Email CTA: `mailto:tnh.justin@gmail.com?cc=1009252@mymail.sutd.edu.sg` (+ subject line).
- PDF: `assets/StackCollectives_Capstone_Outreach.pdf` (download attribute).
- LinkedIn — Justin: /in/teh-nian-hong-justin/ · Yi Da: /in/yi-da-puah/ · Phelia: /in/phelia-hoe/ · Benedict: /in/benedict-julian-danandjaja-antoni-4236973b7/ · Ryan: /in/lim-ryan-ryutaro/ · Owen: /in/owen-yeo-562076203/ · Edric: /in/edric-lum-yu-wei/
- Past capstones: https://capstoneshowcase.sutd.edu.sg · Programme queries: capstone@sutd.edu.sg

## Assets
- Headshots in `assets/team/*.webp` (571×571). **Missing: Ryan** — empty drop slot until supplied.
- **Edric's CV pending** — his card carries only the verifiable robotics-intern credit (T1 dual-arm VLA robot) + LinkedIn; update when CV arrives.

## Deferred / later
- Real team photo for an about section; testimonial once a partner exists; favicon/OG tags before launch.
