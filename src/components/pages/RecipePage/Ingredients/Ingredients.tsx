import React from 'react'
import { wordCapitalizer } from '../../../../helpers/wordCapitalizer'
import { RecipeData } from '../../../../models'
import { LinesBorder } from '../../../ui/LinesBorder'
import styles from './ingredients.module.scss'

type IngredientsProps = {
  reciept: RecipeData | undefined
  margins?: string | undefined
}

export const Ingredients: React.FC<IngredientsProps> = ({ reciept, margins }) => {
  // в базе данных ингредиенты идут единой строкой 'мука – 480 г + еще немного для раскатывания теста'
  // мне нужно их разделить на 2 span, чтобы получилась 2 столбца, а также первую букву сделать заглавной
  const ingredientsCapitalized = reciept?.ingredients.map((ingredient) => {
    return wordCapitalizer(ingredient)
  })
  const ingredientsSeparated = ingredientsCapitalized?.map((ingredient) => {
    return ingredient.split('–')
  })

  return (
    <LinesBorder margins={margins ? margins : ''}>
      <ul className='h-fit p-6'>
        <div className='absolute top-[-22px] bg-[white] pl-2 pr-2 text-center'>
          <h5 className='font-playfair text-2xl font-bold'>Ингредиенты</h5>
        </div>
        {ingredientsSeparated?.map((ingredient, i) => {
          return (
            <li key={i} className={`${styles.liShadow} flex items-end justify-between pb-2 pt-2`}>
              <span className='mr-8 text-left font-[300] text-[#303030]'>{ingredient[0]}</span>
              <span className='text-right font-[400] text-[#1F2937]'>{ingredient[1]}</span>
            </li>
          )
        })}
      </ul>
    </LinesBorder>
  )
}
