import { createFileRoute } from '@tanstack/react-router'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory } from '@/data/products'
import { useCart } from '@/context/CartContext'

export const Route = createFileRoute('/custom')({
  component: CustomPage,
})

function CustomPage() {
  const products = getProductsByCategory('custom')
  const { setIsCustomModalOpen } = useCart()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Marquee />
      <Nav />
      <main style={{ flex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 1.25rem' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <div>
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
                Made Just For You
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
                Custom Orders ✨
              </h1>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: 'var(--mid)',
                  marginTop: '0.75rem',
                  maxWidth: '480px',
                }}
              >
                Have an idea in mind? We bring your dream crochet piece to life. Browse
                examples below or place a fully custom order.
              </p>
            </div>

            <button
              onClick={() => setIsCustomModalOpen(true)}
              style={{
                background: 'var(--dark)',
                color: 'var(--cream)',
                border: 'none',
                borderRadius: '3rem',
                padding: '0.875rem 2rem',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')
              }
            >
              Place Custom Order ✨
            </button>
          </div>

          {/* Custom order promo banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--accent-light), var(--beige))',
              borderRadius: '1.5rem',
              padding: '2rem 2.5rem',
              marginBottom: '2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: 'var(--dark)',
                  margin: '0 0 0.5rem',
                }}
              >
                Your imagination, our hands 🧶
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--mid)',
                  margin: 0,
                  lineHeight: 1.65,
                }}
              >
                Characters, colours, shapes — if you can describe it, we can crochet it.
                Limited slots available each month.
              </p>
            </div>
            <button
              onClick={() => setIsCustomModalOpen(true)}
              style={{
                background: 'var(--dark)',
                color: 'var(--cream)',
                border: 'none',
                borderRadius: '3rem',
                padding: '0.75rem 1.75rem',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Tell Us Your Idea →
            </button>
          </div>

          {/* Products */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.75rem',
              fontWeight: 600,
              color: 'var(--dark)',
              marginBottom: '1.5rem',
            }}
          >
            Custom Examples
          </h2>
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
