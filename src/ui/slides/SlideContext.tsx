import React, { useContext } from 'react'
import { ServiceContext } from '../services'

export function SlideContext () {
  const { fooService, barService } = useContext(ServiceContext)

  return (
    <div className="slide">
      <h1>useContext</h1>
      <div>{fooService.foo()} {barService.bar()}</div>
    </div>
  )
}
