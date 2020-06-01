import { ADD_MESSAGE, CLEAR_MESSAGE } from './types'

let currId = 0;

export const addMessage = (message) => (
  {
    type: ADD_MESSAGE,
    id: currId++,
    message
  }
)

export const clearMessage = () => (
  {
    type: CLEAR_MESSAGE
  }
)