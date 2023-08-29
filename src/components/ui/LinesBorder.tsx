import React from 'react'

type LinesBorderProps = {
  children: React.ReactElement
  margins?: string
}

export const LinesBorder: React.FC<LinesBorderProps> = ({ children, margins }) => {
  return (
    <div className={`rounded-lg border-2 border-[#005278] p-1 ${margins ? margins : ''}`}>
      <div className='relative  border border-[#005278]'>{children}</div>
    </div>
  )
}
