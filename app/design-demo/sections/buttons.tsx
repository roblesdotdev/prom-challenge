import { ChevronDownIcon, SendIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'

export default function ButtonsDemo() {
  return (
    <div className="flex flex-col items-start gap-4 overflow-x-auto py-8">
      <h1 className="text-2xl font-bold">Button</h1>
      <div className="flex flex-col items-start">
        <h1 className="font-bold">Size</h1>
        <div className="flex items-center gap-4 py-4">
          <Button size="xs">BUTTON</Button>
          <Button size="md">BUTTON</Button>
          <Button size="lg">BUTTON</Button>
          <Button size="xl">BUTTON</Button>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="font-bold">Variant</h1>
        <div className="flex items-center gap-4 py-4">
          <Button variant="primary">BUTTON</Button>
          <Button variant="secondary">BUTTON</Button>
          <Button variant="outline">BUTTON</Button>
          <Button variant="outline-secondary">BUTTON</Button>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <h1 className="font-bold">State</h1>
        <div className="flex items-center gap-4 py-4">
          <Button disabled variant="primary">
            BUTTON
          </Button>
          <Button disabled isLoading>
            BUTTON
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <h1 className="font-bold">With Icon</h1>
        <div className="flex items-center gap-4 py-4">
          <Button leftIcon={<SendIcon className="h-4 w-4" />}>BUTTON</Button>
          <Button rightIcon={<SendIcon className="h-4 w-4" />}>BUTTON</Button>
          <Button
            variant="outline"
            rightIcon={<SendIcon className="h-4 w-4" />}
          >
            BUTTON
          </Button>
          <Button
            variant="secondary"
            rightIcon={<SendIcon className="h-4 w-4" />}
          >
            BUTTON
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <h1 className="font-bold">Only Icon</h1>
        <div className="flex items-center gap-4 py-4">
          <Button size="icon">
            <ChevronDownIcon />
          </Button>
          <Button variant="secondary" size="icon">
            <ChevronDownIcon />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronDownIcon />
          </Button>
          <Button variant="outline-secondary" size="icon">
            <ChevronDownIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
