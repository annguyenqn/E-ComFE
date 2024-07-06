import { FormControlComponent } from './FormControl.types'
import { FormControlBase } from './FormControlBase'
import { FormControlErrorMessage } from './FormControlErrorMessage'
import { FormControlLabel } from './FormControlLabel'

const FormControl = FormControlBase as FormControlComponent
FormControl.Label = FormControlLabel
FormControl.ErrorMessage = FormControlErrorMessage

const AppFormControl = FormControl

export { AppFormControl }
