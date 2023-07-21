import type { Game } from './types'

export const demoGames: Game[] = [
  {
    disabled: false,
    name: 'League of Legends',
    src: 'https://i.blogs.es/660693/league-legends-seguira-constante-actualizacion_1464463551_673787_1440x810/1366_2000.jpeg',
    supplier: 'evoplay',
    info: {
      moodBonus: false,
      rtp: '90%',
      version: 12.5,
    },
  },
  {
    disabled: false,
    name: 'League of Legends',
    src: 'https://i.blogs.es/660693/league-legends-seguira-constante-actualizacion_1464463551_673787_1440x810/1366_2000.jpeg',
    supplier: 'evoplay',
    info: {
      moodBonus: true,
      rtp: '90%',
      version: 12.5,
    },
  },
  {
    disabled: true,
    name: 'League of Legends',
    src: 'https://i.blogs.es/660693/league-legends-seguira-constante-actualizacion_1464463551_673787_1440x810/1366_2000.jpeg',
    supplier: 'evoplay',
    info: {
      moodBonus: false,
      rtp: '90%',
      version: 12.5,
    },
  },
]
