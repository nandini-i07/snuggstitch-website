import { useCart } from '@/context/CartContext'

export default function Toast() {
  const { toast } = useCart()

  if (!toast.message) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={toast.visible ? 'toast-enter' : 'toast-exit'}
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--dark)',
        color: 'var(--cream)',
        padding: '0.7rem 1.4rem',
        borderRadius: '2rem',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.875rem',
        fontWeight: 500,
        boxShadow: '0 8px 32px rgba(42, 36, 32, 0.2)',
        zIndex: 9999,
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
      }}
    >
      <span
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--accent)',
          flexShrink: 0,
        }}
      />
      {toast.message}
    </div>
  )
}
