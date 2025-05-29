import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import Image from 'next/image'
import { SuperHero } from '@/types/superhero'
import HeroModal from '../HeroModal'

interface Props {
  hero: SuperHero
}

export default function HeroCard({ hero }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='mb-4 bg-gray-300 transition-transform hover:scale-105 hover:shadow-lg duration-200 cursor-pointer'>
          <CardHeader>
            <CardTitle>{hero.name}</CardTitle>
            <CardDescription>{hero.biography.aliases[0]}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              className='center mx-auto'
              src={hero.images.lg}
              alt={hero.name}
              width={200}
              height={300}
            />
          </CardContent>
          <CardFooter>
            <p>{hero.biography.publisher}</p>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <HeroModal heroId={hero.id} />
    </Dialog>
  )
}
