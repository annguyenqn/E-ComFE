import React from 'react'

export interface TypographyProps {
  variant?: keyof typeof elementMapping
  styleVariant?: keyof typeof styleClasses
  color?: keyof typeof colorClasses
  children?: React.ReactNode
  additionalClasses?: string
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  onClick?: any
  className?: string
}

const elementMapping: { [key: string]: keyof JSX.IntrinsicElements } = {
  largeTitle: 'h1',
  mediumTitle: 'h2',
  smallTitle: 'h3',
  sectionHeading: 'h1',
  subsectionHeading: 'h2',
  minorHeading: 'h3',
  primarySubtitle: 'h6',
  secondarySubtitle: 'h6',
  primaryText: 'p',
  secondaryText: 'p',
  captionText: 'span',
  overlineText: 'span'
}

const variantClasses: { [key: string]: string } = {
  largeTitle: 'font-poppins text-5xl font-bold leading-[3.75rem]',
  mediumTitle: 'font-poppins text-[2.5rem] font-bold leading-[3.25rem]',
  smallTitle: 'font-poppins text-[2.25rem] leading-[2.5rem] font-bold',
  sectionHeading: 'font-poppins text-[2rem] leading-[2.5rem] font-bold',
  subsectionHeading: 'font-poppins text-[1.5rem] leading-[2rem] font-bold',
  minorHeading: 'font-poppins text-[1.25rem] leading-[1.75rem] font-bold',
  primarySubtitle: 'font-poppins text-[1rem] leading-[1.5rem] font-semibold',
  secondarySubtitle: 'font-poppins text-[0.875rem] leading-[1.25rem] font-semibold',
  primaryText: 'font-poppins text-[1rem] leading-[1.25rem]',
  secondaryText: 'font-poppins text-[0.875rem] leading-[1.125rem]',
  captionText: 'font-poppins text-[0.75rem] leading-[1rem]',
  overlineText: 'font-poppins text-[0.625rem] leading-[0.875rem] font-semibold tracking-widest uppercase'
}

const styleClasses = {
  semibold: 'font-semibold',
  underline: 'underline',
  medium: 'font-medium',
  regular: 'font-normal'
}

const colorClasses = {
  primary: 'text-neutral-700',
  secondary: 'text-neutral-500',
  tertiary: 'text-neutral-400',
  black: 'text-black',
  dark: 'text-dashboard-main',
  error: 'text-[#C61616]',
  success: 'text-[#0CB746]',
  warning: 'text-[#E9740B]',
  info: 'text-[#006FAD]'
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'primaryText',
  color = 'primary',
  children,
  styleVariant,
  additionalClasses,
  href,
  target = '_blank',
  rel = 'noreferrer noopener',
  ...rest
}) => {
  const Element: React.ElementType = href ? 'a' : elementMapping[variant] || 'p'
  const combinedClasses = `${variantClasses[variant]} ${styleVariant ? styleClasses[styleVariant] : ''} ${colorClasses[color]} ${additionalClasses || ''}`

  return href ? (
    <a href={href} target={target} rel={rel} className={combinedClasses} {...rest}>
      {children}
    </a>
  ) : (
    <Element className={combinedClasses} {...rest}>
      {children}
    </Element>
  )
}

export { Typography }
