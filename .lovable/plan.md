# Switch the whole site to the Fraunces font family

## What changes today

- Every page is affected — Home, Our Walks, Join Us, Gallery, Walk Safety, FAQ and Contact — because fonts are set once globally, not per page.
- Headings (h1–h4) already use Fraunces, so they stay visually the same.
- Body text, navigation, buttons, cards and forms currently use Nunito and will switch to Fraunces.
- The header, footer and the TikTok feed section change too.
- Any future page automatically inherits Fraunces — no per-page work needed later.

## How it works

One change in the global stylesheet (`src/styles.css`) plus the font link in the root layout:

1. In `src/styles.css`, point `--font-sans` (the body font token) at `"Fraunces", Georgia, serif` instead of Nunito.
2. Update the Google Fonts link in `src/routes/__root.tsx` so Fraunces also loads the lighter weights body text needs (400, plus 600/700 it already loads). Nunito can stay in the link harmlessly or be removed.
3. One cleanup: two spots in the Gallery page use a `font-heading` class that no longer resolves to a defined token — headings there already inherit Fraunces from the base styles, so the class is simply removed.

## Result

- Site-wide Fraunces branding, applied through the shared design tokens, so dark/coloured sections and future pages all follow automatically.
- Verified with a build check and a desktop + mobile screenshot of the homepage, gallery and FAQ pages.
