# Swag — The Zig Air Max 90 Pre-Order

Single-page static site for The Zig Group's limited Air Max 90 pre-order page. All content, styles, photos, and video are embedded in [`src/swag.html`](src/swag.html).

## Local development

```bash
npm install
npm run dev            # http://localhost:4321/Swag/
```

`npm run dev` builds `dist/index.html` from `src/swag.html`, then serves it with Astro preview (respects the `/Swag/` base path).

## Test production build locally

```bash
npm run build
npm run preview        # http://localhost:4321/Swag/
```

## Stripe checkout

Edit the `CONFIG` block near the bottom of [`src/swag.html`](src/swag.html):

```js
stripeBuyButtonId:    "",  // e.g. "buy_btn_1ABCxyz..."
stripePublishableKey: "",  // e.g. "pk_live_..." or "pk_test_..."
stripePaymentLink:    ""   // optional Payment Link URL
```

Leave them blank to run in preview mode (size picker works, checkout shows a placeholder).

## Deploy

Pushes to `master` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages.

**One-time setup in GitHub:** Settings → Pages → Source: **GitHub Actions**

Live URL: [https://enock-2000.github.io/Swag/](https://enock-2000.github.io/Swag/)
