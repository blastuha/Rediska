import { useState, useEffect } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'
import MARKDOWN from '../../markdown.md'

import styles from './MarkdownExample.module.scss'

const MarkdownExample: React.FC = () => {
  const [content, setContent] = useState<string>('')

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

  useEffect(() => {
    fetch(MARKDOWN)
      .then((res) => res.text())
      .then((md) => {
        setContent(md)
      })
  }, [])

  return <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
}

export default MarkdownExample
