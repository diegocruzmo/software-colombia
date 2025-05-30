'use client'

import { useSuperheroes } from '@/queries/useSuperheroes'
import { usePagination } from '@/hooks/usePagination'
import HeroCard from '@/components/HeroCard'
import PaginationControls from '@/components/Pagination'

export default function Home() {
  const { page, size, onPageChange, onSizeChange } = usePagination()
  const { data, isLoading } = useSuperheroes(page, size)

  if (isLoading) return <p>Loading...</p>

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl md:text-5xl font-extrabold text-gray-300 text-center mb-8 '>
        Superheroes
      </h1>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 justify-center'>
        {data?.items.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </ul>

      <PaginationControls
        page={page}
        size={size}
        lastPage={data?.lastPage || 1}
        onPageChange={onPageChange}
        onSizeChange={onSizeChange}
      />
    </div>
  )
}
