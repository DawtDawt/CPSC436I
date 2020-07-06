import { ADD_MESSAGE_SUCCESS, CLEAR_MESSAGE_SUCCESS, GET_MESSAGE_SUCCESS } from './types'

export const addMessageSuccess = res => (
  {
    type: ADD_MESSAGE_SUCCESS,
    content: res.content,
    date: res.date
  }
)

export const clearMessageSuccess = () => (
  {
    type: CLEAR_MESSAGE_SUCCESS
  }
)

export const getMessageSuccess = (res) => (
  {
    type: GET_MESSAGE_SUCCESS,
    payload: res
  }
)