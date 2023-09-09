import { configureStore } from '@reduxjs/toolkit'
import { recipesApi } from './recipes/recipesApi'
import { recipesSlice } from './recipes/recipesSlice'
import { userSlice } from './user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    recipes: recipesSlice.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
