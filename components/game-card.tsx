'use client'
import { GiftIcon, InfoIcon } from 'lucide-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'
import clsx from 'clsx'
import type { Game } from '~/types'
import { useState } from 'react'
import { Badge } from './ui/badge'

export interface GameCardProps {
  size?: 'sm' | 'lg'
  game: Game
  className?: string
}

export default function GameCard({ game, size, className }: GameCardProps) {
  const { disabled, name, src, supplier, info } = game
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const isSmall = size === 'sm'

  return (
    <Card
      className={clsx(
        'group flex flex-col',
        !isSmall ? 'h-[250px] w-[275px]' : 'aspect-square w-[200px]',
        className,
      )}
    >
      {/* CARD IMAGE BG */}
      <CardImage src={src} alt={name} />
      {/* CARD OVERLAY */}
      <div
        className={clsx(
          'absolute inset-0 -z-10 group-hover:bg-black/30',
          showInfo ? 'bg-black/30' : 'bg-transparent',
        )}
      />
      {/* CARD HEADER */}
      <CardHeader>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-white">{supplier}</h1>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="rounded-md bg-black/50 p-1 text-white"
          >
            <InfoIcon className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      {/* CARD MAIN CONTENT */}
      {showInfo ? (
        <div className="flex-1" />
      ) : (
        <CardContent className="hidden flex-1 items-center justify-center group-hover:flex">
          <div className="flex items-center justify-center">
            <Button
              className={clsx(
                'uppercase opacity-80 active:opacity-100',
                isSmall ? 'whitespace-nowrap text-xs' : '',
              )}
              disabled={disabled}
              variant="secondary"
              size={isSmall ? 'sm' : 'md'}
            >
              {disabled ? 'No Disponible' : 'Jugar Ahora'}
            </Button>
          </div>
        </CardContent>
      )}
      {/* CARD FOOTER */}
      <CardFooter className="w-full flex-col justify-end self-start">
        {showInfo ? (
          <div className="mt-auto flex w-full flex-1 flex-col gap-2">
            <h1 className="font-bold text-white">{name}</h1>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>RTP {info.rtp}</Badge>
              <Badge>VERSION {info.version}</Badge>
            </div>
          </div>
        ) : (
          <div className="hidden w-full items-center justify-between group-hover:flex">
            <CardTitle
              className={clsx(
                'self-start text-white',
                disabled && 'text-transparent',
                isSmall && 'hidden',
              )}
            >
              {name}
            </CardTitle>
            <button
              className={clsx(
                'rounded-md bg-black/50 p-1 text-white',
                (disabled || !info.moodBonus) && 'hidden',
                isSmall && 'ml-auto',
              )}
            >
              <GiftIcon className="h-4 w-4 text-secondary" />
            </button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
