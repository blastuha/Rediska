import React from 'react'
import { RecieptsData } from '../../../models'

type NutritionFactsProps = {
  reciept: RecieptsData | null
}

export const NutritionFacts: React.FC<NutritionFactsProps> = ({ reciept }) => {
  const liShadow = (reciept: RecieptsData, i: number) => {
    return i === reciept.nutritionFacts.length - 1
      ? undefined
      : { boxShadow: 'rgb(54, 54, 54) 0px 1px 1px -1px' }
  }

  return (
    <ul className='h-fit rounded-lg bg-[#F9F9F9] p-6'>
      <h5 className='pb-4 font-playfair text-2xl font-bold'>Nutrition Facts</h5>
      {reciept?.nutritionFacts.map((fact, i) => {
        return (
          <li key={i} style={liShadow(reciept, i)}>
            <div className='flex justify-between whitespace-nowrap pb-2 pt-2'>
              <span className='mr-16 font-[300] text-[#303030]'>{fact.name}</span>
              <span className='font-[400] text-[#1F2937]'>{fact.value}</span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
