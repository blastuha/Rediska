import { motion } from 'framer-motion'
import { ContentHeading } from '../../ui/ContentHeading'
import { MarkDown } from '../../ui/MarkDown/MarkDown'
import Loader from '../../ui/Loader'
import { useFetchSelectionOfRecipesByIdQuery } from '../../../redux/recipes/recipesApi'
import { useScrollToTop } from '../../../hooks/useScrollToTop'

export const SelectionOfRecipes: React.FC = () => {
  const { data: selectionOfRecipes, isLoading } =
    useFetchSelectionOfRecipesByIdQuery('HW1oQrycB8lZiQNURo3i')
  useScrollToTop()

  return !isLoading ? (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <ContentHeading
          title='Пять интересных и очень-очень быстрых блюд на всю неделю'
          date='2023-09-23'
        />
        <MarkDown content={selectionOfRecipes?.text} />
      </motion.div>
    </main>
  ) : (
    <Loader styles='flex h-full w-full flex-grow items-center justify-center overflow-hidden bg-[#ffff]' />
  )
}
