import type { Game } from '~/types'

export const fetchGames = async (): Promise<Game[]> => {
  const res = await fetch(
    'https://run.mocky.io/v3/a095fe75-f09e-45fa-967c-4b9c4c908fb3',
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
