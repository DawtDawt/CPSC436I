import { ADD_MESSAGE } from './types'

let currId = 0;

export const addMessage = (message) => (
  {
    type: ADD_MESSAGE,
    id: currId++,
    message
  }
)