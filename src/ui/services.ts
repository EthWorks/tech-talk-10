import { createContext } from 'react'

class FooService {
  foo() {
    return 'FOO'
  }
}

class BarService {
  bar() {
    return 'BAR'
  }
}

export function setup () {
  return {
    fooService: new FooService(),
    barService: new BarService()
  }
}

export type Services = ReturnType<typeof setup>

export const ServiceContext = createContext({} as Services)
