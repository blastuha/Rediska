import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  setDoc,
  arrayRemove,
} from 'firebase/firestore'

import { auth } from '../../api/firebase'

import { db } from '../../api/firebase'

import {
  RecipeData,
  WeekPlot,
  WidgetNewsData,
  RecipesInFavourites,
  SelectionOfRecipes,
  RecipeFavObj,
} from '../../models/'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: [
    'Recipes',
    'WeekPlots',
    'News',
    'Favourites',
    'FavouritesCounter',
    'SelectionOfRecipes',
  ],
  endpoints: (build) => ({
    fetchRecipes: build.query({
      async queryFn() {
        try {
          const recipesData: RecipeData[] = []

          const recipesRef = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/recipets')
          const querySnapshot = await getDocs(recipesRef)

          querySnapshot?.forEach((doc) => {
            recipesData.push(doc.data() as RecipeData)
          })
          return { data: recipesData }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['Recipes'],
    }),

    fetchWeekPlots: build.query({
      async queryFn() {
        try {
          const weekPlotsData: WeekPlot[] = []

          const weekPlotsRef = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/weekPlots')
          const querySnapshot = await getDocs(weekPlotsRef)

          querySnapshot?.forEach((doc) => {
            weekPlotsData.push(doc.data() as WeekPlot)
          })
          return { data: weekPlotsData }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['WeekPlots'],
    }),

    fetchWidgetNews: build.query({
      async queryFn() {
        try {
          const widgetNewsData: WidgetNewsData[] = []

          const widgetNewsRef = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/news')
          const querySnapshot = await getDocs(widgetNewsRef)

          querySnapshot?.forEach((doc) => {
            widgetNewsData.push(doc.data() as WidgetNewsData)
          })
          return { data: widgetNewsData }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['News'],
    }),

    fetchRecipesById: build.query({
      async queryFn(id: string | undefined) {
        try {
          const recipeByIdRef = doc(
            db,
            'reciepts',
            'Q4Dhy8x85wPSOsHSsaim',
            'recipets',
            id ? id : '',
          )
          const recipeByIdSnapshot = await getDoc(recipeByIdRef)
          if (recipeByIdSnapshot.exists()) {
            const recipeData = recipeByIdSnapshot.data() as RecipeData
            return { data: recipeData }
          } else {
            return { data: undefined }
          }
        } catch (error) {
          return { error }
        }
      },
    }),

    fetchWeekPlotById: build.query({
      async queryFn(id: string | undefined) {
        try {
          const weekPlotByIdRef = doc(
            db,
            'reciepts',
            'Q4Dhy8x85wPSOsHSsaim',
            'weekPlots',
            id ? id : '',
          )
          const weekPlotByIdSnapshot = await getDoc(weekPlotByIdRef)
          if (weekPlotByIdSnapshot.exists()) {
            const weekPlotData = weekPlotByIdSnapshot.data() as WeekPlot
            return { data: weekPlotData }
          } else {
            return { data: undefined }
          }
        } catch (error) {
          return { error }
        }
      },
    }),

    fetchWidgetNewsById: build.query({
      async queryFn(id: string | undefined) {
        try {
          const newByIdRef = doc(db, 'reciepts', 'Q4Dhy8x85wPSOsHSsaim', 'news', id ? id : '')
          const newByIdSnapshot = await getDoc(newByIdRef)
          if (newByIdSnapshot.exists()) {
            const newData = newByIdSnapshot.data() as WidgetNewsData
            return { data: newData }
          } else {
            return { data: undefined }
          }
        } catch (error) {
          return { error }
        }
      },
    }),

    addRecipe: build.mutation({
      async queryFn(recipe: RecipeData) {
        try {
          if (auth.currentUser) {
            const ref = doc(db, 'users', auth.currentUser.uid)
            const userSnapshot = await getDoc(ref)

            if (userSnapshot.exists()) {
              await updateDoc(ref, { favourites: arrayUnion(recipe) })
            } else {
              await setDoc(ref, { favourites: [recipe] })
            }
          }
          return { data: 'Рецепт успешно добавлен в избранное' }
        } catch (err) {
          return { error: err }
        }
      },
      // invalidatesTags: ['Favourites'],
    }),

    removeRecipe: build.mutation({
      async queryFn(recipe: RecipeData) {
        try {
          if (auth.currentUser) {
            const ref = doc(db, 'users', auth.currentUser.uid)
            const userSnapshot = await getDoc(ref)

            if (userSnapshot.exists()) {
              await updateDoc(ref, { favourites: arrayRemove(recipe) })
            }
          }
          return { data: 'Рецепт успешно удален из избранных' }
        } catch (err) {
          return { error: err }
        }
      },
      // invalidatesTags: ['Favourites'],
    }),

    addRecipeToCounter: build.mutation({
      async queryFn(recipeFavObj: RecipeFavObj) {
        try {
          if (auth.currentUser) {
            const ref = doc(db, 'favouritesCounter', 'R5UQ2gkTB5C2NYoGy7bD')
            const userSnapshot = await getDoc(ref)

            if (userSnapshot.exists()) {
              await updateDoc(ref, {
                recipesInFavourites: arrayUnion(recipeFavObj),
              })
            } else {
              await setDoc(ref, { recipesInFavourites: [recipeFavObj] })
            }
          }
          return { data: 'Рецепт успешно добавлен в избранное' }
        } catch (err) {
          return { error: err }
        }
      },
      invalidatesTags: ['FavouritesCounter'],
    }),

    removeRecipeFromCounter: build.mutation({
      async queryFn(recipeFavObj: RecipeFavObj) {
        try {
          if (auth.currentUser) {
            const ref = doc(db, 'favouritesCounter', 'R5UQ2gkTB5C2NYoGy7bD')
            const userSnapshot = await getDoc(ref)

            if (userSnapshot.exists()) {
              await updateDoc(ref, {
                recipesInFavourites: arrayRemove(recipeFavObj),
              })
            }
          }
          return { data: 'Рецепт успешно удален из избранного' }
        } catch (err) {
          return { error: err }
        }
      },
      invalidatesTags: ['FavouritesCounter'],
    }),

    fetchRecipesInFavourite: build.query({
      async queryFn() {
        try {
          const ref = doc(db, 'favouritesCounter', 'R5UQ2gkTB5C2NYoGy7bD')
          const docSnapshot = await getDoc(ref)
          if (docSnapshot.exists()) {
            const data = docSnapshot.data() as RecipesInFavourites
            return { data: data.recipesInFavourites }
          } else {
            return { data: [] }
          }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['FavouritesCounter'],
    }),

    fetchSelectionOfRecipesById: build.query({
      async queryFn(id: string | undefined) {
        try {
          const selectionOfRecipeRef = doc(
            db,
            'reciepts',
            'Q4Dhy8x85wPSOsHSsaim',
            'selectionOfRecipes',
            id ? id : '',
          )
          const selectionOfRecipeSnapshot = await getDoc(selectionOfRecipeRef)
          if (selectionOfRecipeSnapshot.exists()) {
            const data = selectionOfRecipeSnapshot.data() as SelectionOfRecipes
            return { data: data }
          } else {
            return { data: undefined }
          }
        } catch (error) {
          return { error }
        }
      },
    }),
  }),
})

export const {
  useFetchRecipesQuery,
  useFetchRecipesByIdQuery,
  useFetchWeekPlotsQuery,
  useFetchWidgetNewsQuery,
  useFetchWeekPlotByIdQuery,
  useFetchWidgetNewsByIdQuery,
  useAddRecipeMutation,
  useRemoveRecipeMutation,
  useAddRecipeToCounterMutation,
  useRemoveRecipeFromCounterMutation,
  useFetchRecipesInFavouriteQuery,
  useFetchSelectionOfRecipesByIdQuery,
} = recipesApi
