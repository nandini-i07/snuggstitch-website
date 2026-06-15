import { useState } from 'react'
import { useCart } from '@/context/CartContext'

function buildMessage(
  items: ReturnType<typeof useCart>['items'],
  total: number,
  form: { name: string; phone: string; address: string; pincode: string; description: string }
) {
  const itemLines = items
    .map((i) => `  • ${i.product.name} x${i.qty}  —  ₹${i.product.price * i.qty}`)
    .join('\n')
  const count = items.reduce((s, i) => s + i.qty, 0)
  const shippingNote = total >= 499 ? '\n🚚 Free Shipping Applied!' : ''
  return `Hi SNUGGSTITCH ✨ I want to place an order!

🛍️ ORDER DETAILS
─────────────────
${itemLines}
─────────────────
💰 Total: ₹${total}${shippingNote}
📦 Items: ${count}

👤 Name: ${form.name || '___'}
📱 Phone: ${form.phone || '___'}
🏠 Address: ${form.address || '___'}
📮 Pincode: ${form.pincode || '___'}
📝 Note: ${form.description || '___'}`
}

export default function OrderModal() {
  const { items, total, isOrderModalOpen, setIsOrderModalOpen, updateQty, removeItem } =
    useCart()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    description: '',
  })
  const [copied, setCopied] = useState(false)

  if (!isOrderModalOpen) return null

  const message = buildMessage(items, total, form)
  const count = items.reduce((s, i) => s + i.qty, 0)

  const handleClose = () => setIsOrderModalOpen(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* fallback: select textarea */
    }
  }

  const handleSendInstagram = async () => {
    await handleCopy()
    window.open('https://ig.me/m/snuggstitch', '_blank', 'noopener')
  }

  const setField = (key: keyof typeof form, val: string) =>
    setForm((f) => ({ ...f, [key]: val }))

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(42, 36, 32, 0.6)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        className="modal-content"
        style={{
          background: 'var(--white)',
          borderRadius: '1.5rem',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(42, 36, 32, 0.2)',
        }}
      >
        {/* Sticky header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--beige)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--dark)',
              margin: 0,
            }}
          >
            Order Summary 🛍️
          </h2>
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{
              background: 'var(--beige)',
              border: 'none',
              borderRadius: '50%',
              width: '2rem',
              height: '2rem',
              cursor: 'pointer',
              fontSize: '1rem',
              color: 'var(--mid)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '1.5rem' }}>
          {items.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '2.5rem 1rem',
                color: 'var(--soft)',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🧺</div>
              <p style={{ fontSize: '1rem', margin: 0 }}>Your cart is empty.</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.4rem' }}>
                Add some handmade goodies!
              </p>
            </div>
          ) : (
            <>
              {/* Items list */}
              <div style={{ marginBottom: '1.5rem' }}>
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.875rem',
                      padding: '0.875rem 0',
                      borderBottom: '1px solid var(--beige)',
                    }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '0.625rem',
                        overflow: 'hidden',
                        flexShrink: 0,
                        background: 'var(--accent-light)',
                      }}
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/* Name + emoji */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: 'var(--dark)',
                          margin: '0 0 0.15rem',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.product.emoji} {item.product.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '0.8rem',
                          color: 'var(--soft)',
                          margin: 0,
                        }}
                      >
                        ₹{item.product.price} each
                      </p>
                    </div>

                    {/* Qty controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(item.product.id, item.qty - 1)}
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: 'var(--dark)',
                          minWidth: '1.5rem',
                          textAlign: 'center',
                        }}
                      >
                        {item.qty}
                      </span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(item.product.id, item.qty + 1)}
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>

                    {/* Line total */}
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--dark)',
                        minWidth: '4.5rem',
                        textAlign: 'right',
                      }}
                    >
                      ₹{item.product.price * item.qty}
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      aria-label="Remove"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--soft)',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        padding: '0.2rem',
                        transition: 'color 0.2s',
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))}

                {/* Total */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '0.875rem',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'var(--dark)',
                      }}
                    >
                      Total ({count} {count === 1 ? 'item' : 'items'})
                    </span>
                    {total >= 499 && (
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '0.75rem',
                          color: '#22a065',
                          margin: '0.2rem 0 0',
                        }}
                      >
                        🚚 You qualify for free shipping!
                      </p>
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--dark)',
                    }}
                  >
                    ₹{total}
                  </span>
                </div>
              </div>

              {/* Delivery details form */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--dark)',
                    marginBottom: '1rem',
                  }}
                >
                  Delivery Details
                </h3>

                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                >
                  <div>
                    <label className="snug-label">Full Name</label>
                    <input
                      className="snug-input"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setField('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="snug-label">Phone Number</label>
                    <input
                      className="snug-input"
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) => setField('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="snug-label">Full Address</label>
                    <textarea
                      className="snug-input"
                      rows={2}
                      placeholder="House no., Street, City, State"
                      value={form.address}
                      onChange={(e) => setField('address', e.target.value)}
                      style={{ resize: 'none' }}
                    />
                  </div>
                  <div>
                    <label className="snug-label">Pincode</label>
                    <input
                      className="snug-input"
                      type="text"
                      placeholder="6-digit pincode"
                      maxLength={6}
                      value={form.pincode}
                      onChange={(e) => setField('pincode', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="snug-label">Special Instructions / Description</label>
                    <textarea
                      className="snug-input"
                      rows={2}
                      placeholder="Any special requests or notes?"
                      value={form.description}
                      onChange={(e) => setField('description', e.target.value)}
                      style={{ resize: 'none' }}
                    />
                  </div>
                </div>
              </div>

              {/* Message preview */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--dark)',
                    marginBottom: '0.625rem',
                  }}
                >
                  Message Preview
                </h3>
                <pre className="message-preview">{message}</pre>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <button
                  onClick={handleSendInstagram}
                  className="btn-instagram"
                  style={{
                    padding: '0.875rem',
                    borderRadius: '0.75rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Send Order via Instagram DM
                </button>

                <button
                  onClick={handleCopy}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    border: '1.5px solid var(--beige-mid)',
                    background: 'transparent',
                    color: 'var(--dark)',
                    transition: 'border-color 0.2s, background 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {copied ? '✓ Copied!' : '📋 Copy Message'}
                </button>
              </div>

              {/* Fallback note */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: 'var(--soft)',
                  textAlign: 'center',
                  marginTop: '0.875rem',
                  lineHeight: 1.6,
                }}
              >
                Copy the message → open Instagram → DM{' '}
                <strong style={{ color: 'var(--mid)' }}>@snuggstitch</strong> → paste and send
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
