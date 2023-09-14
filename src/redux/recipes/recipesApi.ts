import { RecipeData } from './../../models/RecipeData'
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

import { FavouritesData, RecipeData } from '../../models/'
import { WeekPlot } from '../../models/'
import { WidgetNewsData } from '../../models/'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Recipes', 'WeekPlots', 'News', 'Favourites', 'FavouritesCounter'],
  endpoints: (build) => ({
    fetchRecipes: build.query({
      async queryFn() {
        try {
          //*----- разобраться почему закомментированный вариант возвращает undefined?
          // const recipesCol = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/recipets')
          // const recipesSnapshot = await getDocs(recipesCol)
          // const recipesList = recipesSnapshot.docs.map((doc) => doc.data())
          // return recipesList
          //*-------

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

    // fetchFavourites: build.query({
    //   async queryFn() {
    //     try {
    //       if (auth.currentUser) {
    //         return { data: await getFavourites() }
    //       }

    //       return { data: [] }
    //     } catch (error) {
    //       return { error }
    //     }
    //   },
    //   providesTags: (result) =>
    //     result
    //       ? [
    //           ...result.map(({ id }) => ({ type: 'Favourites' as const, id })),
    //           { type: 'Favourites', id: 'LIST' },
    //         ]
    //       : [{ type: 'Favourites', id: 'LIST' }],
    // }),

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
      invalidatesTags: ['Favourites'],
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
      invalidatesTags: ['Favourites'],
    }),

    addRecipeToCounter: build.mutation({
      async queryFn(object) {
        try {
          if (auth.currentUser) {
            const ref = doc(db, 'favouritesCounter', 'R5UQ2gkTB5C2NYoGy7bD')
            const userSnapshot = await getDoc(ref)

            if (userSnapshot.exists()) {
              await updateDoc(ref, {
                recipesInFavourites: arrayUnion(object),
              })
            } else {
              await setDoc(ref, { recipesInFavourites: [object] })
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
      async queryFn(object) {
        try {
          if (auth.currentUser) {
            const ref = doc(db, 'favouritesCounter', 'R5UQ2gkTB5C2NYoGy7bD')
            const userSnapshot = await getDoc(ref)

            if (userSnapshot.exists()) {
              await updateDoc(ref, {
                recipesInFavourites: arrayRemove(object),
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

    fetchFavouritesCounter: build.query({
      async queryFn() {
        try {
          const ref = doc(db, 'favouritesCounter', 'R5UQ2gkTB5C2NYoGy7bD')
          const docSnapshot = await getDoc(ref)
          if (docSnapshot.exists()) {
            const data = docSnapshot.data()
            return { data: data.recipesInFavourites }
          }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['FavouritesCounter'],
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
  // useFetchFavouritesQuery,
  useAddRecipeMutation,
  useRemoveRecipeMutation,
  useAddRecipeToCounterMutation,
  useRemoveRecipeFromCounterMutation,
  useFetchFavouritesCounterQuery,
} = recipesApi
