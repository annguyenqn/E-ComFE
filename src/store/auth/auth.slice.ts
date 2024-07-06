import { PagePath } from '@/constants';
import { AuthUser } from '@/models';
import { authAPI } from '@/proxy/http';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
export interface IAuthState {
  authUser: AuthUser | null;
}

const initialState: IAuthState = {
  authUser: null
};
const tokenReceivedCallback = (
  state: IAuthState,
  action: PayloadAction<AuthUser | null | undefined>
) => {
  console.log('tokenReceivedCallback', action.payload);
  if (action.payload && !_.isEqual(action.payload, state.authUser)) {
    state.authUser = action.payload;
  }
};

const loggoutCallback = (state: IAuthState) => {
  state.authUser = null;
  window.location.href = PagePath.LOG_IN;
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    tokenReceived: tokenReceivedCallback,
    loggedOut: loggoutCallback
  },
  extraReducers: (builder) => {
    builder.addMatcher(authAPI.endpoints.login.matchFulfilled, tokenReceivedCallback),
      builder.addMatcher(authAPI.endpoints.logout.matchFulfilled, loggoutCallback);
  }
});

export const { setAuthUser, tokenReceived, loggedOut } = userSlice.actions;

export default userSlice.reducer;
