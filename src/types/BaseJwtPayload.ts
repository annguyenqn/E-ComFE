export default interface BaseJwtPayload {
  exp: number
  iat: number
  iss: string
  sub: string
  aud: string
  jti: string
}
