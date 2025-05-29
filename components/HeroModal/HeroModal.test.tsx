import { render, screen } from '@testing-library/react'
import HeroModal from '@/components/HeroModal/HeroModal'
import { useSuperhero } from '@/queries/useSuperhero'
import '@testing-library/jest-dom'
import { Dialog } from '@/components/ui/dialog'

jest.mock('@/queries/useSuperhero', () => ({
  useSuperhero: jest.fn()
}))

const mockHeroData = {
  name: 'Adam Strange',
  images: { lg: 'https://example.com/adam-strange.png' },
  biography: {
    aliases: ['Warrior of Two Worlds'],
    firstAppearance: 'Outsiders #6 (April, 1986)',
    placeOfBirth: 'Chicago, Illinois',
    alignment: 'good'
  },
  appearance: {
    gender: 'Male',
    hairColor: 'Blond',
    eyeColor: 'Blue'
  }
}

describe('HeroModal', () => {
  it('renders hero data when loaded', () => {
    // @ts-expect-error mocking custom hook return value in test
    useSuperhero.mockReturnValue({
      data: mockHeroData,
      isLoading: false
    })

    render(
      <Dialog open={true}>
        <HeroModal heroId={1} />
      </Dialog>
    )

    expect(screen.getByText('Adam Strange')).toBeInTheDocument()
    expect(screen.getByText('Warrior of Two Worlds')).toBeInTheDocument()
    expect(screen.getByText('Outsiders #6 (April, 1986)')).toBeInTheDocument()
    expect(screen.getByText('Chicago, Illinois')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()
    expect(screen.getByText('Blond')).toBeInTheDocument()
    expect(screen.getByText('Blue')).toBeInTheDocument()
    expect(screen.getByText('Good')).toBeInTheDocument()
  })
})
