import React, { useState, useEffect } from 'react'

export function useAsync<T> (execute: () => Promise<T>, inputs?: any[]): [T | undefined, any] {
  const [value, setValue] = useState<T | undefined>(undefined)
  const [error, setError] = useState<any>(undefined)

  useEffect(() => {
    execute().then(setValue, setError)
  }, inputs || [])

  return [value, error]
}

type Unsubscribe = () => void
type Subscribe<T> = (callback: (value: T) => void) => Unsubscribe

export function useSubscription<T> (subscribe: Subscribe<T>) {
  const [data, setData] = useState<T | undefined>(undefined)
  useEffect(() => subscribe(setData), [])
  return data
}

const getFoo = () => Promise.resolve('foo')

function currentTimeSubscribe (callback: (value: string) => void) {
  const interval = setInterval(
    () => {
      const now = new Date()
      callback(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
    },
    1000,
  )
  return () => clearInterval(interval)
}

export function SlideCustomHooks () {
  const [foo] = useAsync(getFoo)
  const time = useSubscription(currentTimeSubscribe)

  return (
    <div className="slide">
      <h1>Custom hooks</h1>
      <div>{foo}</div>
      <div>{time}</div>
    </div>
  )
}
