import { Link } from '@tanstack/react-router'
import { categories } from '@/data/products'

export default function CategoryGrid() {
  return (
    <section
      style={{
        background: 'var(--beige)',
        padding: '5rem 1.25rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}
          >
            Explore
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              color: 'var(--dark)',
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            Shop by Category
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="categories-grid"
        >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              style={{ textDecoration: 'none' }}
            >
              <div className="category-card">
                {/* Image area */}
                <div
                  style={{
                    aspectRatio: '1',
                    overflow: 'hidden',
                    background: 'var(--accent-light)',
                    position: 'relative',
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLImageElement).style.transform =
                        'scale(1.06)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLImageElement).style.transform =
                        'scale(1)')
                    }
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(255,255,255,0.85)',
                      borderRadius: '50%',
                      width: '2.25rem',
                      height: '2.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {cat.emoji}
                  </div>
                </div>

                {/* Label */}
                <div style={{ padding: '1rem 1.1rem 1.1rem' }}>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--dark)',
                      margin: '0 0 0.25rem',
                    }}
                  >
                    {cat.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.8rem',
                      color: 'var(--soft)',
                      margin: 0,
                      fontWeight: 300,
                    }}
                  >
                    {cat.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .categories-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .categories-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.875rem !important; }
        }
      `}</style>
    </section>
  )
}
