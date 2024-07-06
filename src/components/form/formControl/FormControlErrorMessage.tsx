import React from 'react'
import { FormControlErrorMessageProps } from './FormControl.types'
import warning from '@public/icons/light-warning-icon.svg'
import Image from 'next/image'
import { renderTypographyChildren } from '@/hooks/renderChildrenText'

const DefaultLeftIcon = () => {
  return (
    <div className='items-center'>
      <Image src={warning} alt='warning-icon' width={20} height={20} />
    </div>
  )
}

const FormControlErrorMessage = (props: FormControlErrorMessageProps) => {
  const { children, leftIcon, rightIcon } = props

  return children ? (
    <div className='flex items-center gap-1 w-full'>
      {leftIcon ?? <DefaultLeftIcon />}
      {renderTypographyChildren(children, {
        className: `text-xs font-normal flex items-center text-error-500 mx-1`
      })}
      {rightIcon}
    </div>
  ) : null
}

export { FormControlErrorMessage }
