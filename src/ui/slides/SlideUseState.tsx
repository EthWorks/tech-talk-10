import React, { useState } from 'react'

export function SlideUseState () {
  const [value, setValue] = useState('')

  return (
    <div className="slide">
      <h1>useState</h1>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}
