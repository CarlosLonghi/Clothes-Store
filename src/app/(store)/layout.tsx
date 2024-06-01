import { ReactNode } from 'react'
import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid grid-rows-app_layout min-h-screen max-w-screen-2xl gap-4 p-6 ">
        <Header />
        <main>{children}</main>
      </div>
    </CartProvider>
  )
}
