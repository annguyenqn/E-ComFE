import { RootState } from '../index'

export const selectUserProfile = (state: RootState) => state.auth.authUser
