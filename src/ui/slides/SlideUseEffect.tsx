import React, { useState, useEffect } from 'react'
import { storage } from '../storage';

export function SlideUseEffect () {
  const [firstName, setFirstName] = useState(storage.getItem('firstName') || '')
  const [lastName, setLastName] = useState(storage.getItem('lastName') || '')

  useEffect(() => {
    storage.setItem('firstName', firstName)
  }, [firstName])

  useEffect(() => {
    storage.setItem('lastName', lastName)
  }, [lastName])

  return (
    <div className="slide">
      <h1>useEffect</h1>
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
