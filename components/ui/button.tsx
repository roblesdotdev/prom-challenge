import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { Loader2Icon } from 'lucide-react'

const buttonVariants = cva(
  'inline-flex items-center justify-center text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-canvas-muted disabled:text-fg-muted',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary shadow hover:bg-primary-variant',
        outline:
          'border-2 border-primary bg-transparent text-primary shadow-sm hover:bg-primary-variant/10',
        secondary:
          'bg-secondary text-on-secondary shadow-sm hover:bg-secondary-variant',
        'outline-secondary':
          'border-2 border-secondary bg-transparent text-secondary shadow-sm hover:bg-secondary/10',
      },
      size: {
        xs: 'h-6 px-2 text-xs font-medium',
        sm: 'h-8 px-6 text-sm',
        md: 'h-10 px-6 text-base',
        lg: 'h-12 px-8',
        xl: 'h-14 px-10',
        icon: 'h-9 px-4',
      },
      rounded: {
        md: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      isLoading = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    const { icon, iconPlacement } = React.useMemo(() => {
      let icon = rightIcon ? rightIcon : leftIcon

      if (isLoading) {
        icon = <Loader2Icon className="h-4 w-4 animate-spin" />
      }

      return {
        icon,
        iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
      }
    }, [isLoading, leftIcon, rightIcon])

    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPlacement === 'left' ? (
          <span
            className={clsx(
              { 'mr-2': !!children },
              'inline-flex shrink-0 self-center',
            )}
          >
            {icon}
          </span>
        ) : null}
        {children}
        {icon && iconPlacement === 'right' ? (
          <span
            className={clsx(
              { 'ml-2': !!children },
              'inline-flex shrink-0 self-center',
            )}
          >
            {icon}
          </span>
        ) : null}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
