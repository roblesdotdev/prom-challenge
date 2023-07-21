import Link from 'next/link'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="flex justify-end py-8">
        <Link
          className="flex gap-2 rounded-sm border px-4 py-3 text-sm"
          href="/design-demo"
        >
          Design Demo
        </Link>
      </div>
      {children}
    </div>
  )
}
