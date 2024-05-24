import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="grid grid-cols-10 grid-rows-6 gap-4">
      <Link
        href={'#'}
        className="group relative col-span-10 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center md:col-span-6 lg:col-span-7"
      >
        <Image
          className="scale-95 group-hover:scale-100 transition-transform duration-200"
          src={'/images/camiseta-hoop-culture.png'}
          width={550}
          height={550}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-16 right-8 h-12 flex items-center gap-2 max-w-64 rounded-full border-2 border-zinc-500 bg-black/50 p-1 pl-5">
          <span className="text-sm truncate">Hoop Culture Shirt</span>
          <span className="flex h-full items-center justify-center rounded-full bg-indigo-600 px-4 font-semibold whitespace-nowrap">
            R$ 150,00
          </span>
        </div>
      </Link>

      <Link
        href={'#'}
        className="group relative col-span-10 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center sm:col-span-5 md:col-span-4 lg:col-span-3"
      >
        <Image
          className="scale-95 group-hover:scale-100 transition-transform duration-200"
          src={'/images/camiseta-ernie-ball.png'}
          width={300}
          height={300}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-8 right-6 h-12 flex items-center gap-2 max-w-64 rounded-full border-2 border-zinc-500 bg-black/50 p-1 pl-5">
          <span className="text-sm truncate">Globee Shirt</span>
          <span className="flex h-full items-center justify-center rounded-full bg-indigo-600 px-4 font-semibold whitespace-nowrap">
            R$ 100,00
          </span>
        </div>
      </Link>
      <Link
        href={'#'}
        className="group relative col-span-10 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center sm:col-span-5 md:col-span-4 lg:col-span-3"
      >
        <Image
          className="scale-95 group-hover:scale-100 transition-transform duration-200"
          src={'/images/camiseta-globbe.png'}
          width={300}
          height={300}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-8 right-6 h-12 flex items-center gap-2 max-w-64 rounded-full border-2 border-zinc-500 bg-black/50 p-1 pl-5">
          <span className="text-sm truncate">Ernie Ball Shirt</span>
          <span className="flex h-full items-center justify-center rounded-full bg-indigo-600 px-4 font-semibold whitespace-nowrap">
            R$ 120,00
          </span>
        </div>
      </Link>
    </div>
  )
}
