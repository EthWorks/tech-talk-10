import { createStore } from 'redux'
import { reducer } from './reducer'

export { State } from './state'
export { Action } from './actions'

export const store = createStore(reducer)
