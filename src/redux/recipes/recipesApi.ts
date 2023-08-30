import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'

import { db } from '../../api/firebase'

import { RecipeData } from '../../models/RecipeData.ts'
import { WeekPlot } from '../../models/WeekPlot.ts'
import { WidgetNewsData } from '../../models/WidgetNewsData.ts'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Recipes', 'WeekPlots', 'News'],
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
      // providesTags: (result, error, id) => [{ type: 'Recipes', id }],
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
      providesTags: ['WeekPlots'],
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
  }),
})

export const {
  useFetchRecipesQuery,
  useFetchRecipesByIdQuery,
  useFetchWeekPlotsQuery,
  useFetchWidgetNewsQuery,
  useFetchWeekPlotByIdQuery,
} = recipesApi
