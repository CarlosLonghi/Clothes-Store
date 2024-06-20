'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.searchInput

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }
  return (
    <form
      onSubmit={handleSearch}
      className="group flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search
        strokeWidth={1.5}
        className="w-5 h-5 text-zinc-400 group-focus-within:text-zinc-100"
      />

      <input
        name="searchInput"
        defaultValue={query ?? ''}
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
      />
    </form>
  )
}
