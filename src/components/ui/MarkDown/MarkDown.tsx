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
  li: (props) => <li className={styles.li}>{props.children}</li>,
}

export const MarkDown: React.FC<{ content: string | undefined }> = ({
  content,
}) => {
  // Разделяем содержимое на блоки Markdown
  const markdownBlocks = content?.split('\\')

  return markdownBlocks?.map((block, index) => (
    <ReactMarkdown
      key={index}
      components={customRenderers}
    >
      {block}
    </ReactMarkdown>
  ))
}
