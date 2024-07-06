interface ErrorDetails {
  field: string
  message: string
}

export default interface BackendResponse<T> {
  statusCode: number
  data: T
  message: string
  error: string | ErrorDetails[]
}
