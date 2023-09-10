import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RecipeData } from '../../models'

type RecipesState = {
  favourites: RecipeData[]
}

const initialState: RecipesState = {
  favourites: [],
}

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setFavourites: (state, action: PayloadAction<RecipeData[]>) => {
      state.favourites = action.payload
    },
    addToFavourite: (state, action: PayloadAction<RecipeData>) => {
      state.favourites.push(action.payload)
    },
    removeFromFavourite: (state, action: PayloadAction<RecipeData>) => {
      state.favourites = state.favourites.filter((item) => item.id !== action.payload.id)
    },
  },
})

export const recipesActions = recipesSlice.actions
