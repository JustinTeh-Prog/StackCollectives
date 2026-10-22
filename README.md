# StackCollectives: SUTD Capstone 2027 team portfolio

Static one-page site for StackCollectives, a seven-person SUTD team looking for an industry partner for a student-initiated Capstone project (September 2027 to April 2028).

Live at **https://stackcollective.vercel.app**. Plain HTML, CSS and JavaScript, with no framework or package dependencies.

```
index.html                  the whole page: content, page CSS and its scripts
assets/css/industry.css     design-system tokens and base components (see DESIGN.md)
assets/team/                headshots, square .webp
assets/partners/            partner logos, 480x192 transparent .webp tiles
assets/cv/                  resumes linked from the member cards
assets/projects/            posters and slides linked from the selected projects
assets/StackCollectives_Capstone_Outreach.pdf
scripts/check.mjs           pre-deploy check: local links resolve, images have alt text
scripts/build.mjs           copies index.html and assets/ into dist/
vercel.json                 Vercel build settings and cache headers
.github/workflows/deploy.yml   CI/CD pipeline
```

## Local preview

Requires Node.js 22 or later.

```
npm run check
npm run preview     # builds dist/ and serves it at http://localhost:3000
```

## Updating content

- **Copy**: edit `index.html` directly.
- **Headshot**: overwrite `assets/team/<name>.webp` with a square image (640px or larger).
- **Resume**: replace the file in `assets/cv/` and keep the same filename, or update the card's link. Everything in `assets/` is public, so remove phone numbers and home addresses first.
- **Partner logo**: add a 480x192 transparent `.webp` to `assets/partners/`, then add it to **both** runs of the reel in `index.html` (the second run is `aria-hidden` and makes the loop seamless). In the first run, give it a `<span class="sr-only tip-src"><b>Kind · year</b> One sentence.</span>` after the image; that text fills the hover popup.
- **Project poster or slides**: compress the PDF before adding it to `assets/projects/` (downsample images to about 150 dpi; aim for under 7 MB), then link the project title to it with `target="_blank"`. Everything in this repo stays in git history, so large files are expensive to remove later.

Keep private working files (original CVs, SUTD documents, drafts) in `uploads/`, which is git-ignored.

## Deploying (CI/CD)

Every push to `main` runs the check and deploys to production on Vercel. Every pull request gets its own preview URL, shown in the Actions run summary. Until the three secrets below exist, the pipeline runs the check and skips the deploy.

One-time setup:

1. **Create a Vercel account** at vercel.com (sign up with GitHub).
2. **Create an access token**: Vercel → Account Settings → Tokens → Create. Scope: your personal account. Copy it.
3. **Create the project and get its IDs** by running this once from the repo root:
   ```
   npx vercel login
   npx vercel link
   ```
   Create a new project with a lowercase name (this one is `stackcollective`). This writes `.vercel/project.json` (git-ignored) containing `orgId` and `projectId`. If the CLI fails to connect the GitHub repository, ignore it: deploys go through GitHub Actions, not Vercel's Git integration.
4. **Add three GitHub repository secrets**: GitHub → repo → Settings → Secrets and variables → Actions → New repository secret.
   - `VERCEL_TOKEN`: the token from step 2
   - `VERCEL_ORG_ID`: `orgId` from `.vercel/project.json`
   - `VERCEL_PROJECT_ID`: `projectId` from `.vercel/project.json`
5. **Push to `main`**, or re-run the workflow from the Actions tab. The production URL appears in the run summary and in the Vercel dashboard.

`vercel.json` sets `git.deploymentEnabled: false`, so Vercel's own Git integration never deploys alongside the pipeline. GitHub Actions is the only deploy path, and a failed check blocks the deploy.
