export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--dark)',
        padding: '4rem 1.25rem 2.5rem',
        textAlign: 'center',
        color: 'var(--cream)',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: 'var(--cream)',
            margin: '0 0 0.5rem',
          }}
        >
          SNUGGSTITCH
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 300,
            color: 'var(--soft)',
            marginBottom: '1.5rem',
            letterSpacing: '0.02em',
          }}
        >
          Handmade crochet, stitched with love
        </p>

        <a
          href="https://www.instagram.com/snuggstitch"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'var(--accent)',
            textDecoration: 'none',
            padding: '0.6rem 1.4rem',
            border: '1px solid rgba(196,168,130,0.3)',
            borderRadius: '2rem',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'var(--accent)'
            el.style.background = 'rgba(196,168,130,0.08)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(196,168,130,0.3)'
            el.style.background = 'transparent'
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          @snuggstitch
        </a>

        <div
          style={{
            height: '1px',
            background: 'rgba(250,248,244,0.12)',
            margin: '2rem 0 1.5rem',
          }}
        />

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 300,
            color: 'var(--soft)',
            margin: 0,
          }}
        >
          Made with love in India 🇮🇳
        </p>
      </div>
    </footer>
  )
}
