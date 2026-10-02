# Vyro Biotherapeutics — Design System

A design system for **Vyro Biotherapeutics**, a Brazilian biotechnology company that creates revolutionary health treatments based on **genetically engineered viruses** — most notably a proprietary oncolytic Zika virus (ZIKV) to attack malignant Central Nervous System (CNS) tumors in adults and children. Vyro was founded by scientists from the Human Genome and Stem Cell Research Center (HUG-CELL) at the University of São Paulo.

The brand narrative is **"From enemy to hero"**: taking a feared virus and turning it into a therapy. The visual language is clinical and confident — deep indigo, clean whites, a single geometric typeface (NOKA), and restrained scientific accent colours.

## Sources
- **Website:** https://vyrobio.com/en/ (WordPress marketing site: Home, About, Technology, Press). Copy and structure in this system are drawn from it.
- **Logos:** the official logo artwork was supplied by the user (`uploads/Ativo 1–7.png`). Processed into transparent PNGs in `assets/logos/`: `vyro-horizontal`, `vyro-stacked`, `vyro-wordmark` (colour, for light grounds) and each `-white` variant (negative, for dark/indigo grounds). The supplied "negative" files were blank white with no alpha, so the white lockups were derived from the colour artwork by keying out the background and recolouring the strokes white.
- **Typeface:** NOKA (Adobe Fonts / Typekit), kit `jka8uju` — `<link rel="stylesheet" href="https://use.typekit.net/jka8uju.css">`.
- **Second uploaded screenshot** (`uploads/Captura de Tela …png`): the filename contains a combining-accent character the tools could not open — see Caveats.

> The official logo artwork is now included as transparent PNGs (`assets/logos/`), in colour and white/negative lockups. Vector **SVG** originals would still be nice-to-have for crisp scaling — send them if available.

---

## CONTENT FUNDAMENTALS
How Vyro writes:
- **Tone:** hopeful, human, and plainly scientific. It names a threat, then delivers the turn — *"From enemy to hero."* / *"The enemy who became a hero."*
- **Structure:** short declarative sentences and headline fragments. Two-line headlines are common (*"The right virus / in the right place."*).
- **Casing:** sentence case for headlines and body. **ALL-CAPS is reserved for process/step labels** in the technology mechanism (e.g. "ZIKV CROSSES THE BLOOD-BRAIN BARRIER") and small overline eyebrows ("PIPELINE", "TECHNOLOGY").
- **Person:** first-person plural for the company (*"We are a biotechnology company…"*, *"Our technology…"*), second person to invite the reader (*"Watch the video and discover…"*, *"Do you know where else…?"*). Rhetorical questions are used to teach.
- **Rigour:** claims are sourced inline (*"Source: CBTRUS"*, *"Source: National Cancer Institute"*). Numbers carry the argument (76% mortality; ~26,000 cases).
- **Emoji:** none. The register is scientific and serious. Do not introduce emoji.
- **Vocabulary:** "oncolytic viruses", "genetically engineered", "central nervous system tumors", "cancer stem cells", "anti-tumoral immune response", "blood-brain barrier", "tumorspheres". Prefer the real scientific term over a casual paraphrase.
- **Signature lines:** "From enemy to hero." · "The right virus in the right place." · "But now there is Vyro."

## VISUAL FOUNDATIONS
- **Colour:** the palette is anchored by two real brand colours — **indigo `#270F70`** (the VYRO wordmark, `--indigo-700`) and a neutral **grey `#929292`** (the virus mark, `--grey-500`). The indigo ramp (`--indigo-50…900`) is the primary brand system; clinical greys and white carry surfaces and text. Three **science-signal accents** — red (`--signal-red`, from the cancer-cell visuals / mortality data), teal (`--signal-teal`, the "hero"/immune accent) and amber — are used sparingly for data and emphasis. **Max one or two backgrounds per surface:** white or `--surface-subtle` for content sections; deep indigo (`--indigo-700…900`) for hero/impact moments.
- **Backgrounds:** heroes use a **deep radial indigo gradient** (bright indigo top-left → near-black `#0c0326`), often with a faint teal radial glow. Content sections are flat white or very light grey — no busy textures or patterns.
- **Type:** a single family — **NOKA**, a geometric sans — across display, headings and body. Headings are heavy (700–800), tight tracking (`-0.02em`), balanced line-wrapping. Body is 400 at 16–20px, relaxed leading (1.65). Eyebrows are uppercase, 600 weight, wide tracking (`0.12em`). Data/captions may use IBM Plex Mono.
- **Spacing:** 4px base grid; generous section padding (`clamp(64px,9vw,128px)`). Content max-width ~1000–1200px.
- **Corner radii:** soft and generous. Cards use 16px (`--radius-lg`); large panels 24px; **buttons and tags are full pills** (`--radius-pill`).
- **Cards:** white fill, 1px `--border-subtle` hairline, soft low-contrast shadow (`--shadow-sm`), 16px radius. Brand cards invert to indigo with white text and a coloured `--shadow-brand`. No coloured left-border-accent cards.
- **Shadows:** soft, tinted with the brand indigo (`rgba(20,6,56,…)`), low opacity — clinical, not dramatic. Elevation scale xs→lg plus a `--shadow-brand` for indigo surfaces.
- **Borders:** thin (1px) hairlines in grey; brand border is indigo. Dividers are `--grey-100/200`.
- **Motion:** calm and understated. Fades and gentle 4px rises on hover; **no bounce, no overshoot.** Standard easing `cubic-bezier(0.22,0.61,0.36,1)`; durations 140/240/480ms.
- **Hover states:** links darken (indigo-700 → indigo-500); cards lift 4px with a deeper shadow; buttons keep colour.
- **Press states:** buttons nudge **down 1px** (`translateY(1px)`) — no scale/shrink.
- **Focus:** `--focus-ring` (indigo-400).
- **Transparency & blur:** used only for the sticky nav and modal scrim over dark grounds (`rgba(20,6,56,0.72)` + `backdrop-filter: blur`). Content surfaces are opaque.
- **Imagery vibe:** cool, clinical, indigo-leaning. A dedicated **bio-imagery library** now lives in `assets/imagery/` — macro science renders of DNA double-helices, cell clusters/tumorspheres, molecular structures, oncolytic-virus particles, plus abstract network textures, all shot on deep-indigo grounds with teal (and occasional red) accents so they sit together as one set. Prefer these over generic stock. A luminance→indigo **duotone treatment** (`*-duotone.jpg`, indigo-900 shadows → indigo-50 highlights) is the recipe for forcing any off-palette image onto brand. Where no fitting image exists, fall back to indigo gradient placeholders — do not fabricate scientific figures.
- **Brand graphic devices:** `assets/brand/` holds transparent-PNG **molecular motifs** — a node cluster (`device-node.png`, use as an emblem / corner accent / hero object) and a molecular chain (`device-chain.png`, use as a horizontal divider or footer rule). They read on both light and indigo grounds and are the primary way to add brand texture to an otherwise plain layout (e.g. social posts). Do not substitute for the logo.
- **Layout rules:** sticky translucent top nav; single-column narrative sections alternating white / light-grey / indigo; stat and press content in responsive grids.

## ICONOGRAPHY
- Vyro's own site is **image- and illustration-led, not icon-led.** Its distinctive mark is the **virus/receptor glyph** in the logo (a central cell with radiating stalked nodes) — treat that as a brand illustration, not a reusable UI icon, and do **not** redraw it.
- The site's scientific content is carried by **SVG/GIF illustrations and micrographs** (e.g. `CEULA-1.svg`, `celulas_vermelho.gif`, tumorsphere photos), not an icon font. These asset URLs were not fetchable from this environment, so none are bundled — request them from the brand owner if needed.
- **No emoji, no unicode-glyph icons.** The register is scientific.
- For UI chrome that genuinely needs icons (arrows, social, close), use **Lucide** from CDN (`https://unpkg.com/lucide@latest`) at a 1.5–2px stroke to match the clean geometric feel. This is a **substitution** flagged here because Vyro defines no UI icon set of its own; swap for the brand's own set if one is provided.

---

## Components
Vyro's site defines no formal component library, so this is a brand-fitted primitive set built from recurring site patterns:
- **Button** (`components/core`) — pill CTA; variants primary / secondary / ghost / inverse; sizes sm/md/lg.
- **Eyebrow** (`components/core`) — uppercase wide-tracked section overline.
- **Tag** (`components/core`) — small pill label; brand / neutral / solid / red / teal / amber.
- **Card** (`components/content`) — base surface; elevated / outline / subtle / brand.
- **StatCard** (`components/content`) — big-number statistic with source line.
- **NewsCard** (`components/content`) — press/news card with cover, category tag, headline, date.
- **Logo** (`components/brand`) — logo lockup (real image on light, NOKA wordmark on dark).

## UI kits
- **Website** (`ui_kits/website`) — interactive recreation of vyrobio.com: Home (hero, story, pipeline, press), About (unmet-need stats), Technology (mechanism steps), Press (filterable grid), plus sticky nav, footer, and a contact/newsletter modal. Open `ui_kits/website/index.html`.

## Slides
- **Slides** (`slides/`) — sample 16:9 deck: Title, Stats, Big Quote, Pipeline.

## Index / manifest (root)
- `assets/` — `logos/`, `imagery/` (bio-science macro renders + duotone treatments), `brand/` (transparent molecular graphic devices).
- `styles.css` — global entry (imports only).
- `tokens/` — `colors.css`, `typography.css`, `layout.css`, `base.css`.
- `components/` — `core/`, `content/`, `brand/` (each with `.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` HTML).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/website/` — marketing-site recreation.
- `slides/` — sample deck.
- `assets/logos/` — transparent logo PNGs: `vyro-horizontal`, `vyro-stacked`, `vyro-wordmark` + `-white` negatives.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills entry point.

## Caveats
- **No vector logo.** Logos are supplied as (now transparent) PNGs. If you have the original **SVG** artwork, send it for crisp scaling at any size.
- **Second screenshot unreadable.** `uploads/Captura de Tela 2026-08-05 às 10.33.54.png` has a filename with a combining-accent character the file tools reject — it was never opened. If it contains brand guidance (colours, layouts), please re-upload it with a plain ASCII filename.
- **NOKA loads via Typekit** (`use.typekit.net/jka8uju.css`); the kit URL could not be fetched here to confirm exact weights/family string, but `font-family: "noka"` is used per Adobe's convention. **IBM Plex Mono** (data/caption fallback) is loaded from Google Fonts.
- **Icons are a Lucide substitution** — Vyro defines no UI icon set; scientific illustrations from the site were not fetchable and are not bundled.
