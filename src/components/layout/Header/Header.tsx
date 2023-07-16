import React from 'react'
import { Logo } from '../../ui/Logo/Logo'
import { HeaderNavList } from '../../ui/HeaderNavList/HeaderNavList'
import { HeaderNavIcons } from '../../ui/HeaderNavIcons/HeaderNavIcons'

import styles from './Header.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderNavList />
      <HeaderNavIcons />
    </header>
  )
}
