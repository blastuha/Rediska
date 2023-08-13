import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../api/firebase'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Recipes'],
  endpoints: (build) => ({
    fetchRecipes: build.query({
      async queryFn() {
        try {
          // const recipesCol = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/recipets')
          // const recipesSnapshot = await getDocs(recipesCol)
          // const recipesList = recipesSnapshot.docs.map((doc) => doc.data())
          // return recipesList
          const userRef = collection(db, '/reciepts/Q4Dhy8x85wPSOsHSsaim/recipets')
          const querySnapshot = await getDocs(userRef)
          let usersData = []
          querySnapshot?.forEach((doc) => {
            usersData.push({
              id: doc.id,
              ...doc.data(),
            })
          })
          return { data: usersData }
        } catch (error) {
          return { error }
        }
      },
      // providesTags: (result, error, id) => [{ type: 'Recipes', id }],
      providesTags: ['Recipes'],
    }),
  }),
})

export const { useFetchRecipesQuery } = recipesApi
