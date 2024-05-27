import { Skeleton } from '@/components/skeleton'

export default function LoadingHome() {
  return (
    <div className="grid grid-cols-10 grid-rows-6 gap-4">
      <Skeleton className="col-span-10 row-span-6 h-[670px] md:col-span-6 md:h-[750px] lg:col-span-7 lg:h-[765px]" />
      <Skeleton className="col-span-10 row-span-3 h-[400px] sm:col-span-5 md:col-span-4 md:h-auto lg:col-span-3" />
      <Skeleton className="col-span-10 row-span-3 h-[400px] sm:col-span-5 md:col-span-4 md:h-auto lg:col-span-3" />
    </div>
  )
}
