import React, { useEffect } from 'react'

export function SlideSubscriptions () {
  useEffect(() => {
    const onClick = (e: MouseEvent) => alert(`You clicked at (${e.clientX} ${e.clientY})`)
    window.addEventListener('mousedown', onClick)
    return () => window.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="slide">
      <h1>useEffect - subscriptions</h1>
    </div>
  )
}
