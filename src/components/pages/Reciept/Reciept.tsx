import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ContentHeading } from '../../ui/ContentHeading'

import { RecieptsData } from '../../../models'
import { fetchRecieptById } from '../../../api/fetchRecieptById'
import { NutritionFacts } from './NutritionFacts'
import { Ingredients } from './Ingredients/Ingredients'

export const Reciept: React.FC = () => {
  const [reciept, setReciept] = useState<RecieptsData | null>(null)
  console.log(reciept)
  const { id } = useParams()

  useEffect(() => {
    fetchRecieptById(id)
      .then((res) => {
        setReciept(res as RecieptsData)
      })
      .catch((err) => console.warn('Ошибка при получении рецепта', err))
  }, [id])

  return (
    <main className='container mx-auto flex-grow pl-4 pr-4'>
      <ContentHeading title={reciept?.title} />
      <p className='pb-8 text-lg'>{reciept?.paragraph}</p>
      <img src={reciept?.photoURL} alt='recieptPhoto' className='mb-8 rounded-lg' />
      <div className='flex justify-between'>
        <Ingredients reciept={reciept} />
        <NutritionFacts reciept={reciept} />
      </div>
      {reciept?.steps.map((step, i) => {
        return (
          <div>
            <h3 className='pb-4 font-playfair text-2xl font-bold'>Шаг {(i + 1).toString()}</h3>
            <img src={step.photoURL} alt='firstStepPhoto' />
            <p>{step.text}</p>
          </div>
        )
      })}
    </main>
  )
}
