import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { type ReactNode } from 'react'
import { CartProvider } from '@/context/CartContext'
import Toast from '@/components/Toast'
import OrderModal from '@/components/OrderModal'
import CustomOrderModal from '@/components/CustomOrderModal'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'SNUGGSTITCH — Handmade Crochet with Love' },
      {
        name: 'description',
        content:
          'SNUGGSTITCH — Handmade crochet keychains, bouquets, hair accessories and custom orders from India. Made with love, stitched to feel special.',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ margin: 0, background: 'var(--cream)', overflowX: 'hidden' }}>
        <CartProvider>
          {children}
          <Toast />
          <OrderModal />
          <CustomOrderModal />
        </CartProvider>
        <Scripts />
      </body>
    </html>
  )
}
