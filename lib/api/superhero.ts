import api from '@/lib/axios'
import { SuperHero } from '@/types/superhero'

export const getSuperhero = async (id: number): Promise<SuperHero> => {
  const { data } = await api.get('/hero', {
    params: { id }
  })
  return data
}
