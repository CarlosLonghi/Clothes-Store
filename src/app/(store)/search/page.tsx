import Image from 'next/image'
import Link from 'next/link'

export default async function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">Camiseta</span>
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href={`/product/camiseta-hoop-culture`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            className="scale-95 group-hover:scale-100 transition-transform duration-200"
            src={'/images/camiseta-hoop-culture.png'}
            width={480}
            height={480}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-8 right-6 h-12 flex items-center gap-2 max-w-64 rounded-full border-2 border-zinc-500 bg-black/50 p-1 pl-5">
            <span className="text-sm truncate">Camista Hoop Culture</span>
            <span className="flex h-full items-center justify-center rounded-full bg-indigo-600 px-4 font-semibold whitespace-nowrap">
              {/* {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })} */}
              R$ 99,99
            </span>
          </div>
        </Link>

        <Link
          href={`/product/camiseta-hoop-culture`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            className="scale-95 group-hover:scale-100 transition-transform duration-200"
            src={'/images/camiseta-hoop-culture.png'}
            width={480}
            height={480}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-8 right-6 h-12 flex items-center gap-2 max-w-64 rounded-full border-2 border-zinc-500 bg-black/50 p-1 pl-5">
            <span className="text-sm truncate">Camista Hoop Culture</span>
            <span className="flex h-full items-center justify-center rounded-full bg-indigo-600 px-4 font-semibold whitespace-nowrap">
              {/* {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })} */}
              R$ 99,99
            </span>
          </div>
        </Link>

        <Link
          href={`/product/camiseta-hoop-culture`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            className="scale-95 group-hover:scale-100 transition-transform duration-200"
            src={'/images/camiseta-hoop-culture.png'}
            width={480}
            height={480}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-8 right-6 h-12 flex items-center gap-2 max-w-64 rounded-full border-2 border-zinc-500 bg-black/50 p-1 pl-5">
            <span className="text-sm truncate">Camista Hoop Culture</span>
            <span className="flex h-full items-center justify-center rounded-full bg-indigo-600 px-4 font-semibold whitespace-nowrap">
              {/* {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })} */}
              R$ 99,99
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
