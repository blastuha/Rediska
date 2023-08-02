import React from 'react'
import { wordCapitalizer } from '../../../../helpers/wordCapitalizer'
import { RecieptsData } from '../../../../models'
import styles from './ingredients.module.scss'

type IngredientsProps = {
  reciept: RecieptsData | null
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
    <ul className={`h-fit rounded-lg bg-[#F9F9F9] p-6 ${margins ? margins : ''}`}>
      <h5 className='pb-4 font-playfair text-2xl font-bold'>Ингредиенты</h5>
      {ingredientsSeparated?.map((ingredient, i) => {
        return (
          <li key={i} className={`${styles.liShadow} flex justify-between pb-2 pt-2 text-right`}>
            <span className='mr-16 font-[300] text-[#303030]'>{ingredient[0]}</span>
            <span className='font-[400] text-[#000000]'>{ingredient[1]}</span>
          </li>
        )
      })}
    </ul>
  )
}
