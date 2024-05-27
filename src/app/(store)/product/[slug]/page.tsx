import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { PlusCircle } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProductSlug(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 30, // 30 minutes
    },
  })

  return response
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProductSlug(params.slug)

  return {
    title: product.title,
    // icons: product.image, // Adiciona imagem do produto no lugar do favicon
  }
}

export default async function ProductView({ params }: ProductProps) {
  const product = await getProductSlug(params.slug)

  return (
    <div className="relative grid gap-4 lg:gap-8 grid-cols-3 grid-rows-2">
      <div className="flex justify-center col-span-3 lg:col-span-2 row-span-2 overflow-hidden">
        <Image
          className="max-h-[calc(100vh-12rem)] object-contain"
          src={product.image}
          alt={product.title}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center col-span-3 lg:col-span-1 lg:row-span-2">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-indigo-600 px-4 py-1.5 font-semibold whitespace-nowrap">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em até <strong className="text-emerald-500">12x sem juros</strong>{' '}
            de{' '}
            <strong className="text-emerald-500">
              {(product.price / 12).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </strong>
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button className="flex h-9 w-14 items-center justify-center rounded-full border-2 border-transparent bg-zinc-800 text-sm font-semibold transition hover:border-indigo-800">
              P
            </button>

            <button className="flex h-9 w-14 items-center justify-center rounded-full border-2 border-transparent bg-zinc-800 text-sm font-semibold transition hover:border-indigo-800">
              M
            </button>

            <button className="flex h-9 w-14 items-center justify-center rounded-full border-2 border-transparent bg-zinc-800 text-sm font-semibold transition hover:border-indigo-800">
              G
            </button>
          </div>
        </div>

        <button className="mt-6 flex gap-2 py-2 justify-center items-center rounded-full bg-emerald-600 text-zinc-100">
          Colocar na sacola
          <PlusCircle strokeWidth={2} className="w-5 h-5 text-zinc-100" />
        </button>
      </div>
    </div>
  )
}
