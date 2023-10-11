import { GridLoader } from 'react-spinners'

const Loader: React.FC = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center overflow-hidden bg-[#ffff]'>
      <GridLoader color='#5d82c2' margin={5} size={20} />
    </div>
  )
}

export default Loader
