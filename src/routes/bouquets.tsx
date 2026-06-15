import { createFileRoute } from '@tanstack/react-router'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory } from '@/data/products'

export const Route = createFileRoute('/bouquets')({
  component: BouquetsPage,
})

function BouquetsPage() {
  const products = getProductsByCategory('bouquets')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Marquee />
      <Nav />
      <main style={{ flex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 1.25rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '0.5rem',
              }}
            >
              Collection
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 600,
                color: 'var(--dark)',
                margin: 0,
              }}
            >
              Bouquets 💐
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                color: 'var(--mid)',
                marginTop: '0.75rem',
              }}
            >
            Why you should buy crochet Bouquets ? because they never die , memories never fade !

            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
