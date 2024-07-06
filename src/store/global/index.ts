import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface GlobalState {
  isLoading: boolean
  isMinimized: boolean
}

const initialState: GlobalState = {
  isLoading: false,
  isMinimized: false
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setIsMinimized: (state) => {
      state.isMinimized = !state.isMinimized
      console.log(state)
    }
  }
})

export const { setIsLoading, setIsMinimized } = globalSlice.actions

export default globalSlice
