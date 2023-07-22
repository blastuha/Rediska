import React, { useState, useEffect } from 'react'

import { MarkDown } from '../ui/MarkDown/MarkDown'

import { fetchWeekPlots } from '../../api/fetchWeekPlots'
import { WeekPlotsData } from '../../models'

export const WeekPlotPage: React.FC = () => {
  return (
    <div className='flex-grow'>
      <MarkDown />
    </div>
  )
}
