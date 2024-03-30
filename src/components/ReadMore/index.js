// Write your code here
import React, {useState} from 'react'
import reactHooksImage from './react-hooks-image.png' 
const reactHooksDescription =
  'Hooks are a new addition to React that lets you use state and other React features without writing a class. This page demonstrates the useState Hook, which is a Hook that allows you to have state variables in functional components.'

const ReadMore = () => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleText = () => {
    setShowFullText(!showFullText)
  }

  return (
    <div>
      <h1 style={{fontFamily: 'Roboto'}}>React Hooks</h1>
      <p>Hooks are a new addition to React</p>
      <img src={reactHooksImage} alt="react hooks" />
      <p>
        {showFullText
          ? reactHooksDescription
          : reactHooksDescription.slice(0, 170)}
      </p>
      <button onClick={toggleText}>
        {showFullText ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}

export default ReadMore
