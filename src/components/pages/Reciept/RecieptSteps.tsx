import React from 'react'
import { RecieptsData } from '../../../models'

type RecieptStepsProps = {
  reciept: RecieptsData | null
}

export const RecieptSteps: React.FC<RecieptStepsProps> = ({ reciept }) => {
  return reciept?.steps.map((step, i) => {
    return (
      <div className='flex flex-col'>
        <h3 className='pb-4 font-playfair text-2xl font-bold'>Шаг {(i + 1).toString()}</h3>
        <img src={step.photoURL} alt='firstStepPhoto' />
        <p>{step.text}</p>
      </div>
    )
  })
}
