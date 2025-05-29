'use client'

import { useQuery } from '@tanstack/react-query'
import { getSuperheroes } from '@/lib/api/superheroes'
import { PaginatedResponse } from '@/types/pagination'
import { SuperHero } from '@/types/superhero'

export const useSuperheroes = (page: number, size: number) => {
  return useQuery<PaginatedResponse<SuperHero>>({
    queryKey: ['superheroes', page, size],
    queryFn: () => getSuperheroes(page, size)
  })
}
