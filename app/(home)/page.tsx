import GameCard from '~/components/game-card'
import type { Game } from '~/types'

const fetchGames = async (): Promise<Game[]> => {
  const res = await fetch(
    'https://run.mocky.io/v3/a095fe75-f09e-45fa-967c-4b9c4c908fb3',
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const games = await fetchGames()
  return (
    <>
      <div className="mx-auto grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3">
        {games.map((game, idx) => (
          <GameCard className="w-full" game={game} key={idx} />
        ))}
      </div>
    </>
  )
}
