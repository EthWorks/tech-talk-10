import React, { useEffect, useState } from 'react'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
async function getData(query: string) {
  await sleep(1000)
  return query.split('').reverse().join('-').toUpperCase()
}

export function SlideDataFetching () {
  const [query, setQuery] = useState('')
  const [data, setData] = useState('...')
  useEffect(() => {
    setData('...')
    getData(query).then(setData, console.error)
  }, [query])

  return (
    <div className="slide">
      <h1>useEffect - data fetching</h1>
      <input
        placeholder="Query"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div>Result: {data}</div>
    </div>
  )
}
