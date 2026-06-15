# AGENTS.md — SNUGGSTITCH Codebase Guide

## Project Type

TanStack Start (React SSR) ecommerce site deployed on Netlify for a handmade crochet brand. **No payment gateway** — all orders via Instagram DM.

## Key Directories

```
src/
  components/     # UI components (Nav, Hero, Modals, ProductCard, etc.)
  context/        # CartContext — cart state + toast + modal open/close state
  data/           # products.ts — product catalog with categories
  routes/         # File-based routes (TanStack Router)
    index.tsx         # Homepage
    keychains.tsx     # Keychains category page
    bouquets.tsx      # Bouquets category page
    hair-accessories.tsx
    custom.tsx        # Custom orders page with CTA
    products/$productId.tsx  # Product detail with image gallery
    checkout/         # Stripped — no Stripe, kept for route tree compat
  styles.css      # Design tokens + custom CSS (marquee, toast, modals, hover-lift)
public/
  products/       # Product images (keychain-bunny.png, hairclip-beige.png, etc.)
```

## Architecture Decisions

- **Cart as React Context**: `CartProvider` wraps the entire app in `__root.tsx`. Cart is in-memory (no persistence). Avoids SSR/localStorage mismatch.
- **Modals at root level**: `<OrderModal>` and `<CustomOrderModal>` are rendered inside `CartProvider` in `__root.tsx` so they're always mounted. Visibility controlled by booleans in context.
- **No Stripe**: `src/lib/stripe.ts` is stubbed out. `BuyButton.tsx` is a no-op. All purchasing via Instagram DM.
- **Instagram DM flow**: Order modal generates a pre-formatted message. "Send via Instagram DM" copies message to clipboard and opens `https://ig.me/m/snuggstitch`.
- **Google Fonts via link tags**: Fonts injected in `__root.tsx`'s `head()` via the `links` array.
- **CSS custom properties**: All brand colors defined as `--cream`, `--dark`, etc. Also registered with Tailwind v4 `@theme`. Component styles use inline `style={{}}` referencing `var(--...)`.
- **Product loader**: Product detail page uses a TanStack Router loader for SSR-safe data fetching (avoids hooks-after-early-return).

## Adding Products

Edit `src/data/products.ts`:
- `products` array — add a new entry with unique `id` string
- `images` array — first image is the product card image; additional images appear as thumbnails in the gallery
- Place images in `public/products/`

## Adding a Category

1. Add a new entry to `categories` in `src/data/products.ts`
2. Create `src/routes/<slug>.tsx` (copy from `keychains.tsx`, update the category filter)
3. Add a nav link in `src/components/Nav.tsx`

## Coding Conventions

- Inline `style={{}}` for brand-specific design (avoids Tailwind class proliferation)
- Tailwind utility classes used sparingly for layout helpers
- All modal/overlay state lives in CartContext — no local modal state in pages
- Components use named exports; routes use `Route.useLoaderData()` for SSR-safe data
- Strict TypeScript — all imports must be used (`noUnusedLocals: true`)
