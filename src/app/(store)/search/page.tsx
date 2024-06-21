import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const featuredProducts = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 30, // 30 minutes
    },
  })

  return featuredProducts
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
            >
              <Image
                className="scale-95 group-hover:scale-100 transition-transform duration-200"
                src={product.image}
                width={480}
                height={480}
                quality={100}
                alt={product.title}
              />

              <div className="absolute bottom-8 right-6 h-12 flex items-center gap-2 max-w-64 rounded-full border-2 border-zinc-500 bg-black/50 p-1 pl-5">
                <span className="text-sm truncate">Camista Hoop Culture</span>
                <span className="flex h-full items-center justify-center rounded-full bg-indigo-600 px-4 font-semibold whitespace-nowrap">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
