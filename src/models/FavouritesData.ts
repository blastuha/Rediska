export type FavouritesData = {
  favourites: Favourite[]
}

export type Favourite = {
  paragraph: string
  ingredients: string[]
  category: string
  photoURL: string
  nutritionFacts: NutritionFact[]
  steps: Step[]
  date: string
  id: string
  cookingTime: string
  title: string
}

type NutritionFact = {
  value: string
  name: string
}

type Step = {
  text: string
  photoURL: string
}
