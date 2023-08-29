import React from 'react'
import { RecipeData } from '../../../models'

type RecieptStepsProps = {
  reciept: RecipeData | undefined
}

export const RecipeSteps: React.FC<RecieptStepsProps> = ({ reciept }) => {
  return reciept?.steps.map((step, i) => {
    return (
      <div key={i} className='flex flex-col pb-4 last:pb-0'>
        <h3 className='pb-4 font-playfair text-2xl font-bold '>Шаг {(i + 1).toString()}</h3>
        <img src={step.photoURL} alt='firstStepPhoto' className='mb-4 rounded-lg' />
        <p>{step.text}</p>
      </div>
    )
  })
}
