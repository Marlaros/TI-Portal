import Image from 'next/image'
import styles from './page.module.css'
import { useRaces } from './hooks/useRaces'
import { IRace } from './components/raceCard/RaceCard.types'
import { RaceList } from './components/raceList/RaceList'

export default function Home() {
  
  return (
    <main className={styles.main}>
        <Image
          src={"https://dmsjourney.com/wp-content/uploads/elementor/thumbs/running-dnd-for-8-players-or-more-q2hmz3ka657n8z57zxnidmaspfkvi1kznr5jjzymps.jpg"}
          alt="Party Image"
          width={900}
          height={450}
          priority
        />
    </main>
  )
}
