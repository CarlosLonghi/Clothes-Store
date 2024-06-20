import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href={'/'}>
          <h1 className="text-2xl text-zinc-100 font-bold">Clothes Store</h1>
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-3">
        <CartWidget />

        <hr className="w-px h-6 bg-zinc-700 border-0" />

        <Link
          href={'/account'}
          className="group flex items-start gap-1"
          title="Account"
        >
          <Image
            className="rounded-full h-8 w-8"
            src={'https://github.com/CarlosLonghi.png'}
            width={24}
            height={24}
            alt=""
          />
          <span className="text-xs font-semibold text-zinc-300 group-hover:text-zinc-100 transition-colors duration-100 ease-linear">
            Account
          </span>
        </Link>
      </div>
    </div>
  )
}
