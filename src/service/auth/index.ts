import { CookieKey, LocalStorageKey } from '@/constants'
import { AuthUser } from '@/models'
import LoginResponse from '@/types/LoginResponse'
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies'
import LocalStorageService from '../localStorage'
export default class AuthService {
  static getCredentialFromCookie(cookies: RequestCookies): AuthUser | null {
    const user = (cookies.get(CookieKey.AUTH)?.value as unknown as AuthUser) || null
    return user
  }

  static tranformLoginResponse({ accessToken }: LoginResponse): AuthUser | null {
    if (!accessToken) return null
    LocalStorageService.setItem(LocalStorageKey.ACCESS_TOKEN, accessToken)
    const payload = jwt.decode(accessToken)
    const authUser: AuthUser = _.pick(payload, ['userId', 'email'] as unknown as keyof AuthUser) as AuthUser
    return authUser
  }
}
