import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'

import { db } from '../../api/firebase'
import { RecipeData } from '../../models/RecipeData.ts'
import { WeekPlot } from '../../models/WeekPlot.ts'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Recipes', 'WeekPlots'],
  endpoints: (build) => ({
    fetchRecipes: build.query({
      async queryFn() {
        try {
          //*----- почему закомментированный вариант не работает?
          // const recipesCol = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/recipets')
          // const recipesSnapshot = await getDocs(recipesCol)
          // const recipesList = recipesSnapshot.docs.map((doc) => doc.data())
          // return recipesList
          //*-------
          const recipesRef = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/recipets')
          const querySnapshot = await getDocs(recipesRef)
          const recipesData: RecipeData[] = []
          querySnapshot?.forEach((doc) => {
            console.log(doc.data())
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
          const weekPlotsRef = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/weekPlots')
          const querySnapshot = await getDocs(weekPlotsRef)
          const weekPlotsData: WeekPlot[] = []
          querySnapshot?.forEach((doc) => {
            console.log(doc.data())
            weekPlotsData.push(doc.data() as WeekPlot)
          })
          return { data: weekPlotsData }
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
  }),
})

export const { useFetchRecipesQuery, useFetchRecipesByIdQuery, useFetchWeekPlotsQuery } = recipesApi
