import { State } from './state'
import { Action } from './actions'

const defaultState: State = {
  currentSlide: 0,
}

export function reducer (state = defaultState, action: Action): State {
  switch (action.type) {
    case 'NEXT_SLIDE':
      return {
        currentSlide: state.currentSlide + 1
      }
    case 'PREVIOUS_SLIDE':
      return {
        currentSlide: state.currentSlide - 1
      }
    default:
      return state
  }
}
