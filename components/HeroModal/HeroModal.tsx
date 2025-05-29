import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { capitalizeFirstLetter } from '@/lib/api/capitalize'
import { useSuperhero } from '@/queries/useSuperhero'
import Image from 'next/image'

interface HeroModalProps {
  heroId: number
}

export default function HeroModal({ heroId }: HeroModalProps) {
  const { data, isLoading } = useSuperhero(heroId)

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>Hero not found</p>

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{data?.name}</DialogTitle>
        <DialogDescription>{data.biography.aliases[0]}</DialogDescription>
        <Image
          className='center mx-auto'
          src={data?.images.lg}
          alt={data?.name}
          width={200}
          height={300}
        />
      </DialogHeader>
      <p>
        <strong>First Appearance: </strong> {data.biography.firstAppearance}
      </p>
      <p>
        <strong>Place Of Birth: </strong> {data.biography.placeOfBirth}
      </p>
      <p>
        <strong>Gender: </strong> {data.appearance.gender}
      </p>
      <p>
        <strong>Hair Color: </strong> {data.appearance.hairColor}
      </p>
      <p>
        <strong>Eye Color: </strong> {data.appearance.eyeColor}
      </p>
      <p>
        <strong>Alignment: </strong>
        {capitalizeFirstLetter(data.biography.alignment)}
      </p>
    </DialogContent>
  )
}
