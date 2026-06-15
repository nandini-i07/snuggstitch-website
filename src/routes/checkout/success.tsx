import { Link, createFileRoute } from '@tanstack/react-router'
import Nav from '@/components/Nav'
import Marquee from '@/components/Marquee'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Marquee />
      <Nav />
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1.25rem',
        }}
      >
        <div
          className="soft-card"
          style={{
            padding: '3rem 2.5rem',
            textAlign: 'center',
            maxWidth: '420px',
            width: '100%',
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '2rem',
              fontWeight: 600,
              color: 'var(--dark)',
              margin: '0 0 0.75rem',
            }}
          >
            Order Sent!
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.9rem',
              color: 'var(--mid)',
              marginBottom: '2rem',
              lineHeight: 1.7,
            }}
          >
            Your order message has been sent to @snuggstitch. We'll get back to
            you soon on Instagram!
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              background: 'var(--dark)',
              color: 'var(--cream)',
              padding: '0.75rem 2rem',
              borderRadius: '3rem',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
