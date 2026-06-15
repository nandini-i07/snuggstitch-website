import { createFileRoute } from '@tanstack/react-router'
import Marquee from '@/components/Marquee'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CategoryGrid from '@/components/CategoryGrid'
import HowToOrder from '@/components/HowToOrder'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Marquee />
      <Nav />
      <main style={{ flex: 1 }}>
        <Hero />
        <CategoryGrid />
        <HowToOrder />

        {/* Why section */}
        <section
          style={{
            padding: '5rem 1.25rem',
            background: 'var(--beige)',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
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
              Why SNUGGSTITCH
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                color: 'var(--dark)',
                margin: '0 0 3rem',
              }}
            >
              Made with intention, gifted with love
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
              }}
              className="why-grid"
            >
              {[
                {
                  emoji: '🧶',
                  title: 'Fully Handmade',
                  desc: 'Every stitch carries a thought of you.',
                },
                {
                  emoji: '🌈',
                  title: 'Fully Customisable',
                  desc: 'Choose your colours, characters, and designs. Your idea, brought to life.',
                },
                {
                  emoji: '❤️',
                  title: 'Made in India',
                  desc: 'Proud to be 100% made in India.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'var(--white)',
                    borderRadius: '1.25rem',
                    padding: '2rem 1.5rem',
                    border: '1px solid var(--beige)',
                    boxShadow: '0 2px 12px rgba(42,36,32,0.04)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2.5rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {item.emoji}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: 'var(--dark)',
                      margin: '0 0 0.6rem',
                    }}
                  >
                    {item.title}
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
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 700px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
