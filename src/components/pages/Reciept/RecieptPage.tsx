import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ContentHeading } from '../../ui/ContentHeading'

import { RecieptsData } from '../../../models'
import { fetchRecieptById } from '../../../api/fetchRecieptById'
import { NutritionFacts } from './NutritionFacts'
import { Ingredients } from './Ingredients/Ingredients'
import { RecieptSteps } from './RecieptSteps'

export const RecieptPage: React.FC = () => {
  const [reciept, setReciept] = useState<RecieptsData | null>(null)
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
        <div className='flex w-3/6 max-w-lg flex-col pr-10'>
          <Ingredients reciept={reciept} margins='mb-10' />
          <NutritionFacts reciept={reciept} />
        </div>
        <div className='flex w-3/5 flex-col'>
          <RecieptSteps reciept={reciept} />
        </div>
      </div>
    </main>
  )
}
