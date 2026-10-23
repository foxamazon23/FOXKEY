# FoxKey Auto & HGV – website

Site static construit cu **Astro 5 + Tailwind CSS 4**. Toate textele, prețurile, mărcile și datele de contact sunt în **`src/config/site.ts`**.

## Rulare locală

```bash
npm install
npm run dev        # http://localhost:4321 (hot reload)
npm run build      # generează site-ul static în /dist
npm run preview    # servește /dist local, ca în producție
npm run assets     # regenerează favicon-ul, logo.png, iconițele și imaginea Open Graph din /public (folosește Chromium)
```

## Ce trebuie completat (în `src/config/site.ts`)

| Cheie | Ce e | Unde apare |
|---|---|---|
| `FORMSPREE_ID` | ID-ul formularului Formspree (ex. `xabcdefg`). Până îl pui, butoanele de trimitere sunt dezactivate și apare un avertisment. | Quote, Fleet, Contact |
| `PRICES_INCLUDE_VAT` | `true` → „inc. VAT”, `false` → „+ VAT” | toate prețurile |
| `FLEET_DISCOUNT` | ex. `'10%'` | HGV, Fleet, FAQ |
| `WARRANTY_TEXT` | textul garanției tale | Services, HGV, Prices, FAQ |
| `GOOGLE_BUSINESS_URL` | linkul Google Business Profile (gol = ascuns) | Footer, Contact, Reviews |
| `SHOW_REVIEWS` | `true` doar când ai recenzii reale în `ReviewsSection.astro` | Home |
| `TRUCK_MAKES[].enabled` | pune `true` pe DAF / Scania / Volvo / MAN / Renault Trucks / Iveco când ai licențele | HGV, Makes, Home |
| `SITE.url` + `site` în `astro.config.mjs` + `Sitemap:` în `public/robots.txt` | domeniul real | canonical, sitemap, OG |

**Poze:** înlocuiește componenta `<PhotoSlot />` din `src/pages/about.astro` cu `<img>` – vezi `public/images/README.md` pentru lista de poze recomandate.

## Deploy pe Cloudflare Pages

1. Pune proiectul pe GitHub:
   ```bash
   git init && git add . && git commit -m "FoxKey website"
   git remote add origin https://github.com/<user>/foxkey-site.git
   git push -u origin main
   ```
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git** → alege repo-ul.
3. Setări build: Framework preset **Astro**, Build command `npm run build`, Output directory `dist`. Variabilă de mediu: `NODE_VERSION = 22`.
4. **Save and Deploy**. Primești `https://<proiect>.pages.dev`. Fiecare `git push` redeployează automat.

### Domeniu .co.uk
1. Cumpără domeniul (Cloudflare Registrar nu vinde .co.uk – folosește orice registrar UK).
2. Cloudflare → **Add a site** → introdu domeniul → plan Free → Cloudflare îți dă 2 nameservere.
3. La registrar schimbă nameserverele pe cele de la Cloudflare (propagare până la 24h).
4. În proiectul Pages → **Custom domains → Set up a custom domain** → `foxkeyauto.co.uk` și apoi `www.foxkeyauto.co.uk`. Cloudflare creează automat înregistrările DNS și certificatul SSL.
5. Opțional: **Bulk Redirects** sau o regulă `www → apex`.
6. Actualizează `SITE.url`, `site` din `astro.config.mjs` și `robots.txt` cu domeniul real, apoi `git push`.

### Netlify (alternativă)
Netlify → **Add new site → Import from Git** → Build `npm run build`, Publish `dist`. Fișierul `public/_headers` funcționează la fel pe ambele platforme.

## Structură

```
src/config/site.ts        ← TOT conținutul editabil
src/layouts/BaseLayout.astro  ← <head>, meta, Open Graph, schema.org (AutomotiveBusiness + Locksmith + hasOfferCatalog)
src/components/           ← Header, Footer, MobileBar, CookieBanner, Hero, PriceTable, FaqList, forms, etc.
src/pages/                ← index, services, hgv, prices, makes, quote, fleet, about, faq, contact, privacy, areas/*, thanks, 404
public/                   ← favicon.svg, apple-touch-icon.png, icon-512.png, logo.png, og-image.png, robots.txt, _headers
scripts/generate-assets.mjs  ← generează logo/favicon/OG din forma vectorială a vulpii
```
