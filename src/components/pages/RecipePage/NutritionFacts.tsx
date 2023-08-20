import React from 'react'
import { RecipeData } from '../../../models'
import { LinesBorder } from '../../ui/LinesBorder'

type NutritionFactsProps = {
  reciept: RecipeData | undefined
}

export const NutritionFacts: React.FC<NutritionFactsProps> = ({ reciept }) => {
  const liShadow = (reciept: RecipeData, i: number) => {
    return i === reciept.nutritionFacts.length - 1
      ? undefined
      : { boxShadow: 'rgb(54, 54, 54) 0px 1px 1px -1px' }
  }

  return (
    <LinesBorder>
      <ul className='h-fit rounded-lg p-6'>
        <div className='absolute top-[-22px] bg-[white] pl-2 pr-2 text-center'>
          <h5 className='font-playfair text-2xl font-bold'>Ингредиенты</h5>
        </div>
        {reciept?.nutritionFacts.map((fact, i) => {
          return (
            <li key={i} style={liShadow(reciept, i)}>
              <div className='flex justify-between whitespace-nowrap pb-2 pt-2'>
                <span className='mr-8 font-[300] text-[#303030]'>{fact.name}</span>
                <span className='font-[400] text-[#1F2937]'>{fact.value}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </LinesBorder>
  )
}
