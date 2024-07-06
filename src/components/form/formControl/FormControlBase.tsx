import React from 'react'
import { FormControlContext, useFormControlProvider } from './useFormControl'
import { FormControlProps } from './FormControl.types'

const FormControlBase = (props: FormControlProps) => {
  const context = useFormControlProvider<FormControlProps>(props)
  const { children } = props

  return (
    <FormControlContext.Provider value={context}>
      <div className='flex flex-col gap-1 w-full'>{children}</div>
    </FormControlContext.Provider>
  )
}

export { FormControlBase }
