import React, { FC } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsPerson } from 'react-icons/bs'
import styles from './HeaderNavIcons.module.scss'

export const HeaderNavIcons: FC = () => {
  return (
    <div className={styles.icons}>
      <CiSearch />
      <BsPerson />
    </div>
  )
}
