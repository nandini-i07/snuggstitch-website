import { Link } from '@tanstack/react-router'
import { useCart } from '@/context/CartContext'

export default function Hero() {
  const { setIsCustomModalOpen } = useCart()

  return (
    <section
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '5rem 1.25rem 4rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left — text */}
        <div>
          {/* <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}
          >
            Handcrafted in India
          </p> */}

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              color: 'var(--dark)',
              margin: '0 0 1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            Want to <br></br>CRO
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--accent)',
              }}
            >
              SLAY?
            </em>
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'var(--mid)',
              lineHeight: 1.7,
              marginBottom: '2.25rem',
              maxWidth: '400px',
            }}
          >
            <i>Crafted for your next photo dump.</i>
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <Link
              to="/keychains"
              style={{
                background: 'var(--dark)',
                color: 'var(--cream)',
                padding: '0.875rem 2rem',
                borderRadius: '3rem',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.transform =
                  'translateY(-2px)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.transform =
                  'translateY(0)')
              }
            >
              Shop Collection
            </Link>
            <button
              onClick={() => setIsCustomModalOpen(true)}
              style={{
                background: 'transparent',
                color: 'var(--dark)',
                padding: '0.875rem 2rem',
                borderRadius: '3rem',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 500,
                border: '1.5px solid var(--dark)',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--dark)'
                el.style.color = 'var(--cream)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = 'var(--dark)'
                el.style.transform = 'translateY(0)'
              }}
            >
              Custom Orders ✨
            </button>
          </div>
        </div>

        {/* Right — decorative card */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              // background: 'var(--beige)',
              // borderRadius: '2rem',
              // padding: '2.5rem',
              // display: 'flex',
              // alignItems: 'center',
              // justifyContent: 'center',
              // minHeight: '380px',
              // position: 'relative',
              // overflow: 'hidden',
            }}
          >
            {/* Decorative circles */}
            <div
              style={{
                // position: 'absolute',
                // top: '-2rem',
                // right: '-2rem',
                // width: '10rem',
                // height: '10rem',
                // borderRadius: '50%',
                // background: 'var(--accent-light)',
                // opacity: 0.4,
              }}
            />
            <div
              style={{
                // position: 'absolute',
                // bottom: '-1.5rem',
                // left: '-1.5rem',
                // width: '8rem',
                // height: '8rem',
                // borderRadius: '50%',
                // background: 'var(--beige-mid)',
                // opacity: 0.5,
              }}
            />

            


            {/* Crochet SVG placeholder
            <div style={{ position: 'relative', zIndex: 1 }}>
              <img
                src=""
                alt="SNUGGSTITCH crochet"
                style={{
                  width: '400px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '50rem',
                  boxShadow: '0 8px 32px rgba(42,36,32,0.12)',
                }}
              />
            </div> */}

            
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 0 !important;
          }
        }
        @media (max-width: 640px) {
          section { padding-top: 3rem !important; padding-bottom: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
