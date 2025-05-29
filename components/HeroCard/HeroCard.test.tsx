import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HeroCard from '@/components/HeroCard'
import { SuperHero } from '@/types/superhero'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const mockHero = {
  id: 1,
  name: 'Adam Monroe',
  images: {
    lg: 'https://example.com/adam-monroe.jpg'
  },
  biography: {
    aliases: ['Takezo Kensei'],
    publisher: 'NBC - Heroes'
  }
} as unknown as SuperHero

describe('HeroCard', () => {
  it('renders single hero card with correct data', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HeroCard hero={mockHero} />
      </QueryClientProvider>
    )

    expect(screen.getByText('Adam Monroe')).toBeInTheDocument()
    expect(screen.getByText('Takezo Kensei')).toBeInTheDocument()
    expect(screen.getByText('NBC - Heroes')).toBeInTheDocument()
  })
})
