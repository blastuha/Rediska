import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import MARKDOWN from '../../markdown.md'

const MarkdownExample: React.FC = () => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    fetch(MARKDOWN)
      .then((res) => res.text())
      .then((md) => {
        setContent(md)
      })
  }, [])

  return <ReactMarkdown>{content}</ReactMarkdown>
}

export default MarkdownExample
