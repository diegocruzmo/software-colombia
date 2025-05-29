import api from '@/lib/axios'
import { PaginatedResponse } from '@/types/pagination'
import { SuperHero } from '@/types/superhero'

export const getSuperheroes = async (
  page: number,
  size: number
): Promise<PaginatedResponse<SuperHero>> => {
  const { data } = await api.get('/heroes', {
    params: { page, size }
  })
  return data
}
