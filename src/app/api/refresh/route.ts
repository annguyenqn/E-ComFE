import { CookieKey } from '@/constants'
import BackendResponse from '@/types/BackendResponse'
import BaseJwtPayload from '@/types/BaseJwtPayload'
import { ServerLoginResponse } from '@/types/ServerlLoginResponse'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export async function POST() {
  const accessToken = cookies().get(CookieKey.AUTH)?.value
  const refreshToken = cookies().get(CookieKey.REFRESH)?.value
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accessToken,
      refreshToken
    })
  })

  const authResponse = await result.json()
  if (!result.ok) {
    return Response.json({ error: authResponse?.message || result.statusText }, { status: authResponse.status })
  }
  const data = (authResponse as BackendResponse<ServerLoginResponse>)?.data
  const accessTokenPayload = jwt.decode(data?.accessToken) as BaseJwtPayload
  const refreshTokenPayload = jwt.decode(data?.refreshToken) as BaseJwtPayload
  cookies().set(CookieKey.AUTH, data?.accessToken, {
    httpOnly: true,
    maxAge: accessTokenPayload.exp - accessTokenPayload.iat
  })
  cookies().set(CookieKey.REFRESH, data?.refreshToken, {
    httpOnly: true,
    maxAge: refreshTokenPayload.exp - refreshTokenPayload.iat
  })
  return Response.json({ accessToken })
}
