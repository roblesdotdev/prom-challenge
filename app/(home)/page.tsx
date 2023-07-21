import GameCard from '~/components/game-card'
import { fetchGames } from '~/lib/games'

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
