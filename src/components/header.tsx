import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href={'/'}>
          <h1 className="text-2xl text-zinc-100 font-bold">Clothes Store</h1>
        </Link>

        <form className="group flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search
            strokeWidth={1.5}
            className="w-5 h-5 text-zinc-400 group-focus-within:text-zinc-100"
          />

          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
          />
        </form>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-start gap-1" title="Bag">
          <ShoppingBag strokeWidth={1.5} className="w-6 h-6 text-zinc-100" />
          <span className="text-xs font-semibold text-zinc-200 rounded-full font-mono">
            Bag (0)
          </span>
        </div>

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
