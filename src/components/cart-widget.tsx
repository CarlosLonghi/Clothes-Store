'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-start gap-1" title="Bag">
      <ShoppingBag strokeWidth={1.5} className="w-6 h-6 text-zinc-100" />
      <span className="text-xs font-semibold text-zinc-200 rounded-full font-mono">
        Bag ({items.length})
      </span>
    </div>
  )
}
