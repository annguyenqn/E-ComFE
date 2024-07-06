import { CookieKey } from '@/constants';
import { loginSchema } from '@/lib/utils';
import BackendResponse from '@/types/BackendResponse';
import BaseJwtPayload from '@/types/BaseJwtPayload';
import { ServerLoginResponse } from '@/types/ServerlLoginResponse';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
export async function POST(request: Request) {
  const body = await request.json();
  try {
    await loginSchema.validate(body);
  } catch (error) {
    return Response.json(error, { status: 400 });
  }
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const authResponse = await result.json();
  if (!result.ok) {
    return Response.json(
      { message: authResponse?.message || result.statusText },
      { status: authResponse.status }
    );
  }
  const { accessToken, refreshToken } = (authResponse as BackendResponse<ServerLoginResponse>)
    ?.data;
  const accessTokenPayload = jwt.decode(accessToken) as BaseJwtPayload;
  const refreshTokenPayload = jwt.decode(refreshToken) as BaseJwtPayload;
  cookies().set(CookieKey.AUTH, accessToken, {
    httpOnly: true,
    maxAge: accessTokenPayload.exp - accessTokenPayload.iat
  });
  cookies().set(CookieKey.REFRESH, refreshToken, {
    httpOnly: true,
    maxAge: refreshTokenPayload.exp - refreshTokenPayload.iat
  });
  return Response.json({ accessToken });
}
