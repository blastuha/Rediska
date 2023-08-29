export type RecipeData = {
  photoURL: string
  title: string
  category: string
  cookingTime: string
  paragraph: string
  ingredients: string[]
  id: string
  steps: Step[]
  nutritionFacts: NutritionFact[]
  date: string
}

export type Step = {
  photoURL: string
  text: string
}

export type NutritionFact = {
  name: string
  value: string
}
