import React from 'react'

type LinesProps = {
  firstLineHeight: string
}

export const Lines: React.FC<LinesProps> = ({ firstLineHeight }) => {
  return (
    <div className={`w-full`}>
      <span className={`mb-[3px] block ${firstLineHeight} bg-[#005278]`}></span>
      <span className='block h-[1px] bg-[#005278]'></span>
    </div>
  )
}
