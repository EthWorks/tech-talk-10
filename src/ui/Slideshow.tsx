import React, { ComponentType, useReducer, useEffect } from 'react'
import { storage } from './storage'

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
  const [slide, dispatch] = useReducer(reducer, storage.getItem('slide') || 0)

  useEffect(() => {
    storage.setItem('slide', slide)
    function onKeyDown (e: KeyboardEvent) {
      if (e.key === 'ArrowLeft' && slide > 0) {
        dispatch({ type: 'PREVIOUS_SLIDE' })
      } else if (e.key === 'ArrowRight' && slide < slides.length - 1) {
        dispatch({ type: 'NEXT_SLIDE' })
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [slide])

  const Slide = slides[slide]

  return <Slide key={slide} />
}
