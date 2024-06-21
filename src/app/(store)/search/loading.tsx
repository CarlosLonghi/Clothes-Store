import { Skeleton } from '@/components/skeleton'
import { LoaderCircleIcon } from 'lucide-react'

export default function LoadingSearch() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-sm">Buscando produtos</p>
        <span className="animate-spin">
          <LoaderCircleIcon strokeWidth={2.5} className="w-5 h-5" />
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
      </div>
    </div>
  )
}
