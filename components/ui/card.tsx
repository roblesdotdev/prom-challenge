import clsx from 'clsx'
import * as React from 'react'
import { BlurrableImg } from './blurrable-img'
import type { ImageProps } from 'next/image'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      'relative overflow-hidden rounded-2xl border bg-transparent text-fg shadow',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardImage = React.forwardRef<HTMLDivElement, ImageProps>(
  ({ src, alt, ...props }, ref) => (
    <div className="absolute inset-0 -z-20" ref={ref}>
      <BlurrableImg
        src={src}
        alt={alt || 'card background'}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
        {...props}
      />
    </div>
  ),
)
CardImage.displayName = 'CardImage'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('relative flex flex-col space-y-1.5 px-4 pt-4', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('relative p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(' flex items-center px-4 pb-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardImage, CardFooter, CardTitle, CardContent }
