import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Product } from '@/data/products'

export interface CartItem {
  product: Product
  qty: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQty: (productId: string, qty: number) => void
  total: number
  itemCount: number
  clear: () => void
  isOrderModalOpen: boolean
  setIsOrderModalOpen: (open: boolean) => void
  isCustomModalOpen: boolean
  setIsCustomModalOpen: (open: boolean) => void
  toast: { message: string; visible: boolean }
  showToast: (message: string) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
  const [toast, setToast] = useState({ message: '', visible: false })

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true })
    setTimeout(() => setToast({ message: '', visible: false }), 2200)
  }, [])

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { product, qty: 1 }]
    })
    showToast(`${product.name} added ✓`)
  }, [showToast])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId))
  }, [])

  const updateQty = useCallback((productId: string, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => i.product.id !== productId))
    } else {
      setItems((prev) =>
        prev.map((i) => (i.product.id === productId ? { ...i, qty } : i))
      )
    }
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const total = items.reduce((sum, i) => sum + i.product.price * i.qty, 0)
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        total,
        itemCount,
        clear,
        isOrderModalOpen,
        setIsOrderModalOpen,
        isCustomModalOpen,
        setIsCustomModalOpen,
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
