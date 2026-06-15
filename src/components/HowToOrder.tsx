const steps = [
  {
    number: '01',
    emoji: '🛍️',
    title: 'Browse & Pick',
    desc: 'Explore our handcrafted collection and find pieces that speak to you.',
  },
  {
    number: '02',
    emoji: '🧺',
    title: 'Add to Cart',
    desc: 'Add your favourites to the cart. Mix and match across categories.',
  },
  {
    number: '03',
    emoji: '📝',
    title: 'Fill Your Details',
    desc: 'Share your name, address, and any special instructions for your order.',
  },
  {
    number: '04',
    emoji: '📲',
    title: 'Send via Instagram',
    desc: 'Your order message is ready! Send it to @snuggstitch on Instagram DM.',
  },
]

export default function HowToOrder() {
  return (
    <section
      style={{
        padding: '5rem 1.25rem',
        background: 'var(--cream)',
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
            Simple & Easy
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              color: 'var(--dark)',
              margin: 0,
            }}
          >
            How to Order
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="soft-card hover-lift"
              style={{ padding: '1.75rem 1.5rem' }}
            >
              {/* Step number + emoji */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div className="step-circle">{step.number}</div>
                <span style={{ fontSize: '1.6rem' }}>{step.emoji}</span>
              </div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '0.4rem',
                }}
              >
                Step {step.number}
              </p>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--dark)',
                  margin: '0 0 0.6rem',
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'var(--mid)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
