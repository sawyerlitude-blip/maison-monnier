# Maison Monnier — Website

**Stack:** Next.js 15 · Tailwind CSS · Sanity CMS · Vercel

---

## DEPLOYMENT STEPS (10 minutes)

### 1. Push to GitHub
```bash
cd maison-monnier
git init
git add .
git commit -m "Initial commit — Maison Monnier website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/maison-monnier.git
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to vercel.com → New Project
2. Import your GitHub repo
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = (from step 3)
   - `NEXT_PUBLIC_SANITY_DATASET` = production
4. Click Deploy

### 3. Set up Sanity CMS
1. Go to sanity.io → Create new project → name it "maison-monnier"
2. Copy your Project ID
3. Run: `npm create sanity@latest -- --project YOUR_PROJECT_ID --dataset production`
4. Paste the schema from `/sanity/schema.ts` into your Sanity studio
5. Go to manage.sanity.io → API → Add `maisonmonnier.fr` and your Vercel domain to CORS origins

### 4. Connect your domain (maisonmonnier.fr)
In your domain registrar (wherever you bought maisonmonnier.fr):
- Add CNAME record: `www` → `cname.vercel-dns.com`
- Add A record: `@` → `76.76.21.21`
In Vercel → Project Settings → Domains → Add `maisonmonnier.fr`

### 5. Update content in Sanity
Go to your Sanity Studio URL and update all content directly. No code needed.

---

## UPDATING CONTENT (no code needed)

Log into your Sanity Studio and edit:
- **Services** — name, description, images
- **Properties** — name, location, description, status (available/soon), images
- **About** — Sébastien's bio, quote, image
- **Site Settings** — email, phone, social links

---

## PAGES
- `/` — Homepage (FR)
- `/services` — Services (FR)
- `/proprietes` — Properties (FR)
- `/a-propos` — About (FR)
- `/contact` — Contact (FR)
- `/en` — Homepage (EN)
- `/en/services` — Services (EN)
- `/en/properties` — Properties (EN)
- `/en/about` — About (EN)
- `/en/contact` — Contact (EN)
