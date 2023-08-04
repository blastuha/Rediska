import React from 'react'

type LinesProps = {
  firstLineHeight: string
  paddings?: string
}

export const Lines: React.FC<LinesProps> = ({ firstLineHeight, paddings }) => {
  return (
    <div className={`w-full ${paddings ? paddings : ''}`}>
      <span className={`mb-[5px] block ${firstLineHeight} bg-[#005278]`}></span>
      <span className='block h-[1px] bg-[#005278]'></span>
    </div>
  )
}
