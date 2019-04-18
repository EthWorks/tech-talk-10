import React, { useRef, useEffect } from 'react'

export function SlideUseRef () {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current!.focus()
  }, [])

  return (
    <div className="slide">
      <h1>useRef</h1>
      <input ref={inputRef} />
    </div>
  )
}
