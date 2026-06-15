import { Link } from '@tanstack/react-router'
import { useCart } from '@/context/CartContext'

export default function Nav() {
  const { itemCount, setIsOrderModalOpen } = useCart()

  return (
    <nav
      className="glass-nav sticky top-0 z-50"
      style={{ height: '64px' }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.25rem',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'var(--dark)',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            flexShrink: 0,
          }}
        >
          SNUGGSTITCH
        </Link>

        {/* Desktop nav links — hidden under 640px */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="hidden-mobile"
        >
          {[
            { label: 'Keychains', to: '/keychains' },
            { label: 'Bouquets', to: '/bouquets' },
            { label: 'Hair Accessories', to: '/hair-accessories' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 400,
                color: 'var(--mid)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--dark)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--mid)')
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cart button */}
        <button
          onClick={() => setIsOrderModalOpen(true)}
          aria-label={`Cart, ${itemCount} items`}
          style={{
            position: 'relative',
            background: 'var(--dark)',
            color: 'var(--cream)',
            border: 'none',
            borderRadius: '2rem',
            padding: '0.5rem 1.1rem',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'background 0.2s, transform 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')
          }
        >
          <span style={{ fontSize: '1rem' }}>🧺</span>
          <span>Cart</span>
          {itemCount > 0 && (
            <span
              style={{
                background: 'var(--accent)',
                color: 'var(--dark)',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '0.72rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '2px',
              }}
            >
              {itemCount > 9 ? '9+' : itemCount}
            </span>
          )}
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
