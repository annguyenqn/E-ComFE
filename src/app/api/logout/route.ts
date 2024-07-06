import { CookieKey } from '@/constants'
import { cookies } from 'next/headers'
export async function POST() {
  const refreshToken = cookies().get(CookieKey.REFRESH)?.value
  cookies().delete(CookieKey.REFRESH)
  cookies().delete(CookieKey.AUTH)
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken })
  })

  const logoutResponse = await result.json()
  if (!result.ok) {
    return Response.json(
      { error: logoutResponse?.message || result.statusText },
      { status: logoutResponse.status }
    )
  }

  return Response.json({ message: 'success' })
}
