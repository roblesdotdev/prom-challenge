'use client'
import ButtonsDemo from './sections/buttons'
import CardsDemo from './sections/cards'
import { ChevronLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="mx-auto max-w-5xl px-4 pb-8">
      <div className="py-8">
        <button
          onClick={() => router.back()}
          className="flex gap-2 rounded-sm border px-4 py-3 text-sm"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span>Back to home</span>
        </button>
      </div>
      <ButtonsDemo />
      <CardsDemo />
    </div>
  )
}
