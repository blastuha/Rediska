import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

import { ContentHeading } from '../../ui/ContentHeading'
import { NutritionFacts } from './NutritionFacts'
import { Ingredients } from './Ingredients/Ingredients'
import { RecipeSteps } from './RecipeSteps'
import Loader from '../../ui/Loader'

import { useFetchRecipesByIdQuery } from '../../../redux/recipes/recipesApi'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useIsRecipeInFavourites } from '../../../hooks/useIsRecipeInFavourites'
import { useFavouritesActions } from '../../../hooks/useFavouritesActions'
import { useFavouritesCounter } from '../../../hooks/useFavouritesCounter'
import { useScrollToTop } from '../../../hooks/useScrollToTop'

export const RecipePage: React.FC = () => {
  const { id } = useParams()
  const favouritesArr = useAppSelector((state) => state.recipes.favourites)
  const { data: recipe, isLoading } = useFetchRecipesByIdQuery(id)
  const isRecipeInFavourites = useIsRecipeInFavourites(recipe?.id, favouritesArr)
  const favouritesCounter = useFavouritesCounter(recipe?.id)
  const { addToFavourites, removeFromFavourites, optimisticFavouritesCounter } =
    useFavouritesActions(favouritesCounter)

  console.log('recipe', recipe)

  useScrollToTop()

  return (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      {!isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
          }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <ContentHeading
            data={recipe}
            date={recipe?.date}
            title={recipe?.title}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
            isRecipeInFavourites={isRecipeInFavourites}
            favouritesCounter={optimisticFavouritesCounter}
          />
          <p className='pb-6 text-[1rem] xs:text-[1rem]'>{recipe?.paragraph}</p>
          <img src={recipe?.photoURL} alt='recieptPhoto' className='mb-8 w-full rounded-lg' />
          <div className='flex justify-between xs:flex-col md:flex-row'>
            <div className='flex max-w-lg flex-col xs:mb-6 md:mb-0 md:w-3/6 md:pr-10'>
              <Ingredients reciept={recipe} margins='mb-10' />
              <NutritionFacts reciept={recipe} />
            </div>
            <div className='flex flex-col md:w-3/5'>
              <RecipeSteps reciept={recipe} />
            </div>
          </div>
        </motion.div>
      ) : (
        <Loader />
      )}
    </main>
  )
}
