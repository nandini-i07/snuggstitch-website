import { useState } from 'react'
import { useCart } from '@/context/CartContext'

function buildCustomMessage(form: {
  name: string
  idea: string
  color: string
  address: string
  pincode: string
  phone: string
  attachImage: boolean
}) {
  const imageNote = form.attachImage
    ? '\n\n📎 [Attaching reference image in the next message]'
    : ''
  return `Hi SNUGGSTITCH ✨ I want to place a CUSTOM crochet order!

🎨 CUSTOM ORDER DETAILS
─────────────────────
👤 Name: ${form.name || '___'}
📱 Phone: ${form.phone || '___'}
💡 Idea: ${form.idea || '___'}
🎨 Colour / Theme: ${form.color || '___'}
🏠 Address: ${form.address || '___'}
📮 Pincode: ${form.pincode || '___'}${imageNote}`
}

export default function CustomOrderModal() {
  const { isCustomModalOpen, setIsCustomModalOpen } = useCart()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    idea: '',
    color: '',
    address: '',
    pincode: '',
    attachImage: false,
  })
  const [copied, setCopied] = useState(false)

  if (!isCustomModalOpen) return null

  const message = buildCustomMessage(form)

  const setField = (key: keyof typeof form, val: string | boolean) =>
    setForm((f) => ({ ...f, [key]: val }))

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* silent */
    }
  }

  const handleSend = async () => {
    await handleCopy()
    window.open('https://ig.me/m/snuggstitch', '_blank', 'noopener')
  }

  return (
    <div
      className="modal-overlay"
      onClick={(e) =>
        e.target === e.currentTarget && setIsCustomModalOpen(false)
      }
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
          maxWidth: '520px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(42, 36, 32, 0.2)',
        }}
      >
        {/* Header */}
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
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.4rem',
                fontWeight: 600,
                color: 'var(--dark)',
                margin: '0 0 0.15rem',
              }}
            >
              Custom Order ✨
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 300,
                color: 'var(--soft)',
                margin: 0,
              }}
            >
              Tell us your dream crochet piece
            </p>
          </div>
          <button
            onClick={() => setIsCustomModalOpen(false)}
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
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
              <label className="snug-label">Your Idea 💡</label>
              <textarea
                className="snug-input"
                rows={2}
                placeholder="e.g. A bunny with a bow tie, Spiderman keychain..."
                value={form.idea}
                onChange={(e) => setField('idea', e.target.value)}
                style={{ resize: 'none' }}
              />
            </div>
            <div>
              <label className="snug-label">Colour / Theme 🎨</label>
              <input
                className="snug-input"
                type="text"
                placeholder="e.g. Pastel pink, Dark coquette, Red & blue..."
                value={form.color}
                onChange={(e) => setField('color', e.target.value)}
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

            {/* Attach image toggle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.75rem 1rem',
                background: 'var(--cream)',
                borderRadius: '0.625rem',
                cursor: 'pointer',
              }}
              onClick={() => setField('attachImage', !form.attachImage)}
            >
              <div
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  borderRadius: '0.25rem',
                  border: `2px solid ${form.attachImage ? 'var(--accent)' : 'var(--beige-mid)'}`,
                  background: form.attachImage ? 'var(--accent)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
              >
                {form.attachImage && (
                  <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: 700 }}>
                    ✓
                  </span>
                )}
              </div>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.85rem',
                  color: 'var(--dark)',
                }}
              >
                📎 I'll attach a reference image in the next message
              </span>
            </div>
          </div>

          {/* Message preview */}
          <div style={{ margin: '1.25rem 0' }}>
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
              onClick={handleSend}
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
              Send Custom Order via Instagram DM
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
        </div>
      </div>
    </div>
  )
}
