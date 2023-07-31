import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ContentHeading } from '../../ui/ContentHeading'

import { RecieptsData } from '../../../models'
import { fetchRecieptById } from '../../../api/fetchRecieptById'

export const Reciept: React.FC = () => {
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
      <h3>{reciept?.title}</h3>
      <p>{reciept?.paragraph}</p>
      <img src={reciept?.photoURL} alt='recieptPhoto' />
      <h5>Ингредиенты</h5>
      <ul>
        {reciept?.ingredients.map((ingredient) => {
          return <li>{ingredient}</li>
        })}
      </ul>
      <br />
      {reciept?.steps.map((step, i) => {
        return (
          <div>
            <h3>Шаг {(i + 1).toString()}</h3>
            <img src={step.photoURL} alt='firstStepPhoto' />
            <p>{step.text}</p>
          </div>
        )
      })}
    </main>
  )
}
