import React, { useState, useEffect } from 'react'

const letters = 'Tech Talk #10'.split('')
const initialColors = letters.map(randomColor)

export function SlideIntro () {
  const [colors, setColors] = useState(initialColors)

  function changeRandomLetter () {
    const newColors = colors.map(x => x)
    newColors[Math.floor(Math.random() * newColors.length)] = randomColor()
    setColors(newColors)
  }

  useEffect(() => {
    const interval = setInterval(changeRandomLetter, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slide">
      <img src="https://ethworks.io/assets/images/logo-ethworks.svg" />
      <h1>{colors.map((color, index) => (
        <span style={{ color }} key={index}>{letters[index]}</span>
      ))}</h1>
    </div>
  )
}

function randomColor () {
  const randomChannel = () => Math.floor(Math.random() * 256)
  return `rgb(${randomChannel()},${randomChannel()},${randomChannel()})`
}
