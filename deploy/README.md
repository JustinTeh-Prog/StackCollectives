# StackCollectives — SUTD Capstone 2027 team portfolio

Static site, no build step. `index.html` is the entrypoint; everything is relative-pathed.

## Deploy
- **GitHub Pages**: push this folder's contents to the repo root, then Settings → Pages → Deploy from branch → `main` / root. Keep `.nojekyll` (without it, Pages drops the `_ds/` folder).
- **Vercel**: import the repo, Framework Preset = **Other**, no build command, output directory = root.

## Updating content
- Headshots: overwrite files in `assets/team/` (Ryan's pending).
- Resumes: files in `assets/cv/` (Edric's pending).
- Copy/sections: edit `index.html` directly — see `DESIGN.md` and `REQUIREMENT.md`.
