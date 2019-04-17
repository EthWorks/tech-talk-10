export type Action
  = { type: 'NEXT_SLIDE' }
  | { type: 'PREVIOUS_SLIDE' }

export type ActionType = Action['type']
