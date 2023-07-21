import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="flex justify-end py-8">
        <Link
          className="flex items-center gap-2 rounded-sm border px-4 py-3 text-sm"
          href="/design-demo"
        >
          <span>Design Demo</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </div>
      {children}
    </div>
  )
}
