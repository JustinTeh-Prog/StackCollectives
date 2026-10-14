# StackCollectives: SUTD Capstone 2027 team portfolio

Static one-page site. `index.html` is the source: plain HTML/CSS/JS, no framework.

```
index.html          the whole page (content + page CSS)
_ds/industry-…/     design-system tokens + components (styles.css)
assets/team/        headshots, square .webp
assets/partners/    partner logos, 480x192 transparent .webp tiles
assets/cv/          resumes linked from the member cards
scripts/check.mjs   pre-deploy check: local links resolve, images have alt text
scripts/build.mjs   copies only the publishable files into dist/
vercel.json         Vercel build settings
.github/workflows/deploy.yml   CI/CD pipeline
```

`uploads/` is working material and is never deployed (the build copies only `index.html`, `_ds/` and `assets/`).

## Local preview

```
npm run check
npm run preview     # builds dist/ and serves it at http://localhost:3000
```

## Updating content

- **Copy**: edit `index.html` directly.
- **Headshot**: overwrite `assets/team/<name>.webp` with a square image (640px or larger).
- **Resume**: replace the file in `assets/cv/` and keep the same filename, or update the card's link.
- **Partner logo**: add a 480x192 transparent `.webp` to `assets/partners/`, then add it to **both** runs of the reel in `index.html` (the second run is `aria-hidden` and makes the loop seamless).

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
   Answer: set up and link → yes; scope → your account; link to existing project → no; project name → `stackcollectives`. This writes `.vercel/project.json` (git-ignored) containing `orgId` and `projectId`.
4. **Add three GitHub repository secrets**: GitHub → repo → Settings → Secrets and variables → Actions → New repository secret.
   - `VERCEL_TOKEN`: the token from step 2
   - `VERCEL_ORG_ID`: `orgId` from `.vercel/project.json`
   - `VERCEL_PROJECT_ID`: `projectId` from `.vercel/project.json`
5. **Push to `main`**, or re-run the workflow from the Actions tab. The production URL appears in the run summary and in the Vercel dashboard.

`vercel.json` sets `git.deploymentEnabled: false`, so Vercel's own Git integration never deploys alongside the pipeline. GitHub Actions is the only deploy path, and a failed check blocks the deploy.
