export type FormControlProps = {
  children?: any
  isReadOnly?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
}

export type FormControlLabelProps = FormControlProps & {}
export type FormControlErrorMessageProps = FormControlProps & {
  leftIcon?: Element
  rightIcon?: Element
}

// eslint-disable-next-line no-unused-vars
export type FormControlComponent = ((props: FormControlProps) => JSX.Element) & {
  // eslint-disable-next-line no-unused-vars
  Label: (props: FormControlLabelProps) => JSX.Element
  // eslint-disable-next-line no-unused-vars
  ErrorMessage: (props: FormControlErrorMessageProps) => JSX.Element | null
}

export type FormControlState = {
  /**
   * If true, this prop is passed to its children.
   */
  isInvalid?: boolean
  /**
   * If true, this prop is passed to its children.
   */
  isRequired?: boolean
  /**
   * If true, this prop is passed to its children.
   */
  isDisabled?: boolean
  /**
   * If true, this prop is passed to its children.
   */
  isReadOnly?: boolean
}
