import React from 'react'
import { MainSwiper } from './MainSwiper'
import { WeekPlotsSection } from './WeekPlotsSection'
import { WeekPlotsGrid } from './WeekPlotsGrid'

import { NewsData } from '../../models'
import { WeekPlotsData } from '../../models'

type MainContainerProps = {
  news: NewsData[]
  weekPlots: WeekPlotsData[]
}

export const MainContainer: React.FC<MainContainerProps> = ({
  news,
  weekPlots,
}) => {
  return (
    <>
      <MainSwiper newsData={news} />
      <WeekPlotsSection>
        <WeekPlotsGrid weekPlotsData={weekPlots} />
      </WeekPlotsSection>
    </>
  )
}
