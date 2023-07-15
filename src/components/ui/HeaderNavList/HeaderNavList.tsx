import React, { FC } from 'react'
import styles from './HeaderNavList.module.scss'

const headerNavigation: string[] = ['Рецепты', 'Хит сезона', 'Новости']

export const HeaderNavList: FC = () => {
  return (
    <ul className={styles.navList}>
      {headerNavigation.map((item: string) => {
        return <li>{item}</li>
      })}
    </ul>
  )
}
