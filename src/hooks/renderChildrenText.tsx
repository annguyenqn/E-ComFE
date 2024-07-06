import { Typography, TypographyProps } from '@/components/ui/text'
import React from 'react'

type Children = any
export const renderTypographyChildren = (children: Children, textProps?: TypographyProps) => {
  return React.Children.map(children, (child) => {
    const isStringOrNumber = (v: unknown) => ['number', 'string'].includes(typeof v)

    const shouldRenderText =
      isStringOrNumber(child) || (child?.type === React.Fragment && isStringOrNumber(child?.children))
    return shouldRenderText ? <Typography {...textProps}>{child}</Typography> : child
  })
}
