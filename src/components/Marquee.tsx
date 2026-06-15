export default function Marquee() {
  const text =
    'Free Shipping over ₹499 ✨  ·  Handmade with Love ✨  ·  Custom Orders Available ✨  ·  '
  const repeated = text.repeat(2)

  return (
    <div
      style={{
        background: 'var(--dark)',
        color: 'var(--accent-light)',
        fontSize: '0.78rem',
        letterSpacing: '0.09em',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        height: '36px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        <span style={{ paddingRight: '2rem' }}>{repeated}</span>
        <span style={{ paddingRight: '2rem' }}>{repeated}</span>
      </div>
    </div>
  )
}
