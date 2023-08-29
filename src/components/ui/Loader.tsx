import React, { ReactElement } from 'react'
import { GridLoader } from 'react-spinners'

const Loader = (): ReactElement => {
  return (
    <div className='flex h-screen w-full items-center justify-center overflow-hidden bg-[#ffff]'>
      <GridLoader color='#959595' margin={5} size={20} />
    </div>
  )
}

export default Loader
