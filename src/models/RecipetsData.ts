export type RecieptsData = {
  photoURL: string
  title: string
  category: string
  cookingTime: string
  paragraph: string
  ingredients: string[]
  steps: Step[]
  id: string
}

export type Step = {
  photoURL?: string
  text?: string
}
