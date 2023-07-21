import GameCard from '~/components/game-card'
import { demoGames } from '~/data'

export default function CardsDemo() {
  return (
    <div className="flex flex-col items-start gap-4 py-8">
      <h1 className="text-2xl font-bold">Card</h1>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-4 py-4">
          {demoGames.map((game, idx) => (
            <GameCard size="lg" key={idx} game={game} />
          ))}
        </div>
        <div className="flex items-center gap-4 py-4">
          {demoGames.map((game, idx) => (
            <GameCard size="sm" key={idx} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}
