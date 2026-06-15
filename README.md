# SNUGGSTITCH

A premium handmade crochet brand website for SNUGGSTITCH — featuring keychains, bouquets, hair accessories, and custom crochet orders.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React SSR)
- **Router**: [TanStack Router](https://tanstack.com/router) (file-based routing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + custom CSS with Google Fonts
- **Deploy**: [Netlify](https://netlify.com)

## Design System

- **Fonts**: Cormorant Garamond (headings) + DM Sans (body) from Google Fonts
- **Palette**: Cream `#FAF8F4`, Beige `#EDE8DF`, Dark `#2A2420`, Accent `#C4A882`
- **Aesthetic**: Minimal luxury, lots of white space, soft shadows, hover lift animations

## Features

- Animated marquee announcement bar
- Sticky glass-blur navigation with live cart badge
- Hero section with brand identity
- Category grid (Keychains, Bouquets, Hair Accessories, Custom Orders)
- Product gallery with thumbnail carousel (tap to slide through 2+ images)
- Add to cart with toast notifications
- **Order Modal**: Full order form (name, phone, address, pincode, description) with live Instagram DM message preview
- **Custom Order Modal**: Separate form for fully custom crochet pieces
- Instagram DM order flow (no payment gateway — all orders via @snuggstitch)
- "How to Order" 4-step section
- Fully responsive, mobile-first design

## Ordering Flow

Orders are placed via Instagram DM. The order modal generates a pre-formatted message with all delivery details that users send to `@snuggstitch`.

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
