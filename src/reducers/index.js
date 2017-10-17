import {combineReducers} from 'redux'
import chatReducer from './chatReducer'

const chatApp = combineReducers({
  chats: chatReducer
})

export default chatApp
