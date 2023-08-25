import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
  user: null | { email: string; token: string; id: string }
  // email: string | null
  // token: string | null
  // id: string | null
}

const initialState: UserState = {
  user: null,
  // email: null,
  // token: null,
  // id: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.user = action.payload
      // state.email = action.payload.email
      // state.token = action.payload.token
      // state.id = action.payload.id
    },
    removeUser(state) {
      state.user = null
      // state.email = null
      // state.token = null
      // state.id = null
    },
  },
})

export const userActions = userSlice.actions
