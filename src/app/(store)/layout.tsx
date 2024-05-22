import { ReactNode } from 'react'
import { Header } from '../components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid grid-rows-app_layout min-h-screen max-w-screen-2xl gap-4 p-6 ">
      <Header />
      <article className="bg-gray-600">{children}</article>
    </div>
  )
}
