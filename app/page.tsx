'use client'

import { useState } from 'react'
import { useSuperheroes } from '@/queries/useSuperheroes'
import HeroCard from '@/components/HeroCard'
import PaginationControls from '@/components/Pagination'

export default function Home() {
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)

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
        onPageChange={setPage}
        onSizeChange={(newSize) => {
          setSize(newSize)
          setPage(1)
        }}
      />
    </div>
  )
}
