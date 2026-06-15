import { useState } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import { getProductById, getProductsByCategory } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useCart } from '@/context/CartContext'

export const Route = createFileRoute('/products/$productId')({
  loader: ({ params }) => {
    const product = getProductById(params.productId)
    if (!product) throw notFound()
    return { product }
  },
  component: ProductDetailPage,
})

function ProductDetailPage() {
  const { product } = Route.useLoaderData()
  const { addItem, setIsOrderModalOpen } = useCart()
  const [activeImg, setActiveImg] = useState(0)
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3)

  const handleBuyNow = () => {
    addItem(product)
    setIsOrderModalOpen(true)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Marquee />
      <Nav />
      <main style={{ flex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.25rem' }}>
          {/* Breadcrumb */}
          <nav
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8rem',
              color: 'var(--soft)',
              marginBottom: '2rem',
              display: 'flex',
              gap: '0.4rem',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/" style={{ color: 'var(--soft)', textDecoration: 'none' }}>
              Home
            </Link>
            <span>›</span>
            <Link
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              to={`/${product.category}` as any}
              style={{ color: 'var(--soft)', textDecoration: 'none' }}
            >
              {product.category.replace(/-/g, ' ')}
            </Link>
            <span>›</span>
            <span style={{ color: 'var(--dark)' }}>{product.name}</span>
          </nav>

          {/* Product layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3.5rem',
              alignItems: 'start',
              marginBottom: '5rem',
            }}
            className="product-detail-grid"
          >
            {/* Left: gallery */}
            <div>
              {/* Main image */}
              <div
                style={{
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  background: 'var(--accent-light)',
                  aspectRatio: '1',
                  marginBottom: '1rem',
                }}
              >
                <img
                  key={activeImg}
                  src={product.images[activeImg]}
                  alt={`${product.name} — image ${activeImg + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.3s ease',
                  }}
                />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div
                  style={{
                    display: 'flex',
                    gap: '0.625rem',
                    overflowX: 'auto',
                    paddingBottom: '4px',
                  }}
                >
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(idx)}
                      aria-label={`View image ${idx + 1}`}
                      style={{
                        width: '72px',
                        height: '72px',
                        flexShrink: 0,
                        background: 'var(--accent-light)',
                        border: `2px solid ${activeImg === idx ? 'var(--accent)' : 'var(--beige)'}`,
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        padding: 0,
                        cursor: 'pointer',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: product info */}
            <div style={{ position: 'sticky', top: '84px' }}>
              {/* Category badge */}
              <span
                style={{
                  display: 'inline-block',
                  background: 'var(--accent-light)',
                  color: 'var(--mid)',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.875rem',
                  borderRadius: '2rem',
                  marginBottom: '1rem',
                }}
              >
                {product.emoji} {product.category.replace(/-/g, ' ')}
              </span>

              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 600,
                  color: 'var(--dark)',
                  margin: '0 0 0.75rem',
                  lineHeight: 1.1,
                }}
              >
                {product.name}
              </h1>

              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2.25rem',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  marginBottom: '1.25rem',
                }}
              >
                ₹{product.price}
              </div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: 'var(--mid)',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                }}
              >
                {product.description}
              </p>

              {/* Trust badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.625rem',
                  marginBottom: '2rem',
                }}
              >
                {['🤲 Handmade', '🇮🇳 Made in India', '✨ Limited Stock'].map((b) => (
                  <span
                    key={b}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.78rem',
                      color: 'var(--mid)',
                      background: 'var(--beige)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '2rem',
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => addItem(product)}
                  style={{
                    background: 'transparent',
                    color: 'var(--dark)',
                    border: '2px solid var(--dark)',
                    borderRadius: '3rem',
                    padding: '0.9rem 2rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = 'var(--beige)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = 'transparent')
                  }
                >
                  🧺 Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  style={{
                    background: 'var(--dark)',
                    color: 'var(--cream)',
                    border: 'none',
                    borderRadius: '3rem',
                    padding: '0.9rem 2rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')
                  }
                >
                  Order Now via Instagram →
                </button>
              </div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.78rem',
                  color: 'var(--soft)',
                  marginTop: '1rem',
                  textAlign: 'center',
                }}
              >
                🚚 Free shipping on orders over ₹499
              </p>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--dark)',
                  marginBottom: '1.75rem',
                }}
              >
                You might also like
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .product-detail-grid > div:last-child {
            position: static !important;
          }
        }
      `}</style>
    </div>
  )
}
