const splitAndJoinByDash = (str) => {
  const letters = str.split('')
  let result = []
  let currentSpan = []
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === '-') {
      result.push(<span key={`span-${i}`}>{currentSpan.join('')}</span>)
      currentSpan = []
    } else {
      currentSpan.push(letters[i])
    }
  }
  result.push(<span key='remaining-span'>{currentSpan.join('')}</span>)
  return result
}

// Пример использования
const x = () => {
  const str = 'Hello-World-Example'
  const splittedStr = splitAndJoinByDash(str)

  return <div>{splittedStr}</div>
}

console.log(x)
