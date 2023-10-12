import { GridLoader } from 'react-spinners'

type LoeaderProps = {
  styles: string
}

const Loader: React.FC<LoeaderProps> = ({ styles }) => {
  return (
    <div className={styles}>
      <GridLoader color='#5d82c2' margin={5} size={20} />
    </div>
  )
}

export default Loader
