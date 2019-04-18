import React, { useState } from 'react'

export function SlideUseStateForm () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div className="slide">
      <h1>useState {firstName} {lastName}</h1>
      <input
        placeholder="First name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
    </div>
  )
}
