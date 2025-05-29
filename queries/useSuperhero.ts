'use client'

import { useQuery } from '@tanstack/react-query'
import { getSuperhero } from '@/lib/api/superhero'
import { SuperHero } from '@/types/superhero'

export const useSuperhero = (id: number) => {
  return useQuery<SuperHero>({
    queryKey: ['superhero', id],
    queryFn: () => getSuperhero(id)
  })
}
