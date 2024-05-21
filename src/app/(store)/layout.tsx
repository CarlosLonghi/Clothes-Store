import { ReactNode } from 'react'
import { Header } from '../components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <Header />
      <article>{children}</article>
    </div>
  )
}
