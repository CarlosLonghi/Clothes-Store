'use client'

import { useCart } from '@/contexts/cart-context'
import { PlusCircle } from 'lucide-react'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      className="mt-6 flex gap-2 py-2 justify-center items-center rounded-full bg-emerald-600 text-zinc-100"
      onClick={handleAddProductToCart}
    >
      Colocar na sacola
      <PlusCircle strokeWidth={2} className="w-5 h-5 text-zinc-100" />
    </button>
  )
}
