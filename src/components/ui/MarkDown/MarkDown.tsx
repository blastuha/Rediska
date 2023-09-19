import ReactMarkdown, { Components } from 'react-markdown'
import styles from './MarkDown.module.scss'

const customRenderers: Components = {
  //  классы для заголовков
  h1: (props) => <h1 className={styles.h1}>{props.children}</h1>,
  h2: (props) => <h2 className={styles.h2}>{props.children}</h2>,
  h3: (props) => <h2 className={styles.h3}>{props.children}</h2>,
  //  классы для параграфов
  p: (props) => <p className={styles.p}>{props.children}</p>,
  //  классы для списков
  ul: (props) => <ul className={styles.ul}>{props.children}</ul>,
  li: (props) => (
    <li className={styles.li}>
      <span className='text-[16px]'>{props.children}</span>
      {/* {props.children} */}
    </li>
  ),
  //  классы для images
  img: (props) => <img className={styles.img} src={props.src} alt={props.alt} />,
}

export const MarkDown: React.FC<{ content: string | undefined }> = ({ content }) => {
  //заменяем \\ на пробел, чтобы корректно отображались li в ul (иначе будет один li на весь ul)
  const formattedContent = content?.replace(/\\+/g, '\n')
  const markdownBlocks = formattedContent?.split('\\')
  return markdownBlocks?.map((block, index) => (
    <ReactMarkdown key={index} components={customRenderers}>
      {block}
    </ReactMarkdown>
  ))
}
