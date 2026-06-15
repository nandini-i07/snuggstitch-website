import { Link } from '@tanstack/react-router'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/data/products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart()

  return (
    <div className="product-card">
      {/* Image */}
      <Link
        to="/products/$productId"
        params={{ productId: product.id }}
        style={{ display: 'block', textDecoration: 'none' }}
      >
        <div
          style={{
            aspectRatio: '1',
            overflow: 'hidden',
            background: 'var(--accent-light)',
          }}
        >
          <img
            src={product.images[0]}
            alt={product.name}
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
              ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')
            }
          />
        </div>
      </Link>

      {/* Info */}
      <div style={{ padding: '1rem 1.1rem 1.2rem' }}>
        <Link
          to="/products/$productId"
          params={{ productId: product.id }}
          style={{ textDecoration: 'none' }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.15rem',
              fontWeight: 600,
              color: 'var(--dark)',
              margin: '0 0 0.25rem',
              lineHeight: 1.3,
            }}
          >
            {product.name}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 300,
              color: 'var(--soft)',
              margin: '0 0 0.75rem',
              lineHeight: 1.5,
            }}
          >
            {product.shortDescription}
          </p>
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.4rem',
              fontWeight: 600,
              color: 'var(--dark)',
            }}
          >
            ₹{product.price}
          </span>
          <button
            onClick={() => addItem(product)}
            style={{
              background: 'var(--dark)',
              color: 'var(--cream)',
              border: 'none',
              borderRadius: '2rem',
              padding: '0.45rem 1rem',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform =
                'translateY(-1px)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')
            }
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  )
}
