# Eastern Pinetree Engineering PLLC — Website

Static site for **Eastern Pinetree Engineering PLLC**, promoting the continuing
education course *Early Building Construction in NYC: Evolution of Structural Systems*.
Built for GitHub Pages — no build step, no dependencies.

## Files

- `index.html` — the whole site: course overview, agenda, FAQ, registration links
- `style.css` — all styling
- `script.js` — keeps the footer copyright year current
- `404.html` — custom not-found page
- `.nojekyll` — disables Jekyll processing (needed for plain HTML sites)
- `robots.txt` and `sitemap.xml` — basic SEO files
- `LICENSE` — MIT
- `deploy.sh` — one-line commit and push helper
- `.gitignore`

## Before you publish

1. **Registration form** — the "Register for the course" buttons in `index.html`
   still point at the old Google Form. Replace both URLs with the form for this course.
2. **SEO URLs** — replace `YOUR-GITHUB-PAGES-URL` in `robots.txt` and `sitemap.xml`
   with the real address, e.g. `https://username.github.io` or your custom domain.

## Publish on GitHub Pages

1. Create a public GitHub repo.
2. Upload every file in this folder to the repo root, including the hidden
   `.nojekyll` and `.gitignore` files.
3. Go to **Settings → Pages**.
4. Under **Source**, choose branch `main` and folder `/ (root)`.
5. Save. The site goes live in about a minute.

## Custom domain (optional)

There is no `CNAME` file in this folder. If you own a domain and want to use it,
create a file named `CNAME` (no extension) in the repo root containing only the
domain, for example:

```
easternpinetree.com
```

Then point the domain's DNS at GitHub Pages at your registrar. If you don't own the
domain, leave the file out — a `CNAME` with a domain you don't control will break the site.

Last updated: 2026-08-02
