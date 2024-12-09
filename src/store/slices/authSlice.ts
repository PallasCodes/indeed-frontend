import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/user.interface'

interface AuthState {
  authIsReady: boolean
  user: User | null
}

const initialState: AuthState = {
  authIsReady: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthIsReady: (state, action: PayloadAction<boolean>) => {
      state.authIsReady = action.payload
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
  },
})

export const { setAuthIsReady, setUser } = authSlice.actions

export default authSlice.reducer
