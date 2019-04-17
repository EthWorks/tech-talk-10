import React, { ComponentType, useReducer } from 'react'

type Action
  = { type: 'NEXT_SLIDE' }
  | { type: 'PREVIOUS_SLIDE' }

export function reducer (slide: number, action: Action): number {
  switch (action.type) {
    case 'NEXT_SLIDE':
      return slide + 1
    case 'PREVIOUS_SLIDE':
      return slide - 1
    default:
      return slide
  }
}

export interface SlideshowProps {
  slides: ComponentType<{}>[]
}

export function Slideshow ({ slides }: SlideshowProps) {
  const [slide, dispatch] = useReducer(reducer, 0)

  return (
    <>
      {slides.map((Slide, index) => (
        <Slide key={index} />
      ))}
    </>
  )
}
