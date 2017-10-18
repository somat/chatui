import { combineReducers } from 'redux'
import {
  CHAT_LIST_ERROR,
  CHAT_LIST_LOADING,
  CHAT_LIST_SUCCESS,

  CHAT_VIEW_ERROR,
  CHAT_VIEW_LOADING,
  CHAT_VIEW_SUCCESS,

  CHAT_ADD_ERROR,
  CHAT_ADD_LOADING,
  CHAT_ADD_SUCCESS
} from '../actions/constant'

const chatListError = (state = false, action) => {
  switch (action.type) {
    case CHAT_LIST_ERROR:
      return action.chatListError
    default:
      return state
  }
}

const chatListLoading = (state = false, action) => {
  switch (action.type) {
    case CHAT_LIST_LOADING:
      return action.chatListLoading
    default:
      return state
  }
}

const chatListSuccess = (state = false, action) => {
  switch (action.type) {
    case CHAT_LIST_SUCCESS:
      return action.chatListSuccess
    default:
      return state
  }
}

const chatViewError = (state = false, action) => {
  switch (action.type) {
    case CHAT_VIEW_ERROR:
      return action.chatViewError
    default:
      return state
  }
}

const chatViewLoading = (state = false, action) => {
  switch (action.type) {
    case CHAT_VIEW_LOADING:
      return action.chatViewLoading
    default:
      return state
  }
}

const chatViewSuccess = (state = false, action) => {
  switch (action.type) {
    case CHAT_VIEW_SUCCESS:
      return action.chatViewSuccess
    default:
      return state
  }
}

const chatAddError = (state = false, action) => {
  switch (action.type) {
    case CHAT_ADD_ERROR:
      return action.chatAddError
    default:
      return state
  }
}

const chatAddLoading = (state = false, action) => {
  switch (action.type) {
    case CHAT_ADD_LOADING:
      return action.chatAddLoading
    default:
      return state
  }
}

const chatAddSuccess = (state = false, action) => {
  switch (action.type) {
    case CHAT_ADD_SUCCESS:
      return action.chatAddSuccess
    default:
      return state
  }
}

const chats = (state = [], action) => {
  switch (action.type) {
    case CHAT_LIST_SUCCESS:
      return action.chats
    default:
      return state
  }
}

const chat = (state = {}, action) => {
  switch (action.type) {
    case CHAT_VIEW_SUCCESS:
      return action.chat
    default:
      return state
  }
}

const chatReducer = combineReducers({
  chatListError,
  chatListLoading,
  chatListSuccess,

  chatViewError,
  chatViewLoading,
  chatViewSuccess,

  chatAddError,
  chatAddLoading,
  chatAddSuccess,

  chats,
  chat
})

export default chatReducer
