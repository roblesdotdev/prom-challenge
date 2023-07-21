import Link from 'next/link'
import { Button, buttonVariants } from '~/components/ui/button'

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="py-16">
        <Link
          className={buttonVariants({ variant: 'outline', size: 'sm' })}
          href="/design-demo"
        >
          Design Demo
        </Link>
      </div>
    </div>
  )
}
