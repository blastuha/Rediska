import React from 'react'
import styles from './ingredients.module.scss'
import { RecieptsData } from '../../../../models'

type IngredientsProps = {
  reciept: RecieptsData | null
}

export const Ingredients: React.FC<IngredientsProps> = ({ reciept }) => {
  return (
    <ul className='mr-20 h-fit w-2/3 rounded-lg bg-[#F9F9F9] p-6'>
      <h5 className='pb-4 font-playfair text-2xl font-bold'>Ингредиенты</h5>
      {reciept?.ingredients.map((ingredient, i) => {
        console.log(ingredient)
        return (
          <li key={i} className={`${styles.liShadow} flex justify-between pb-2 pt-2`}>
            //! Миша сюжа не смотри ;)
            {ingredient.split('').map((letter) => {
              if (letter === '–') {
                return <span>{letter}</span>
              } else {
                return letter
              }
            })}
          </li>
        )
      })}
    </ul>
  )
}
