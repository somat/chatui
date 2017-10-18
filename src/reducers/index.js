import {combineReducers} from 'redux'
import chatReducer from './chatReducer'
import categoryReducer from './categoryReducer'

const chatApp = combineReducers({
  chats: chatReducer,
  categories: categoryReducer
})

export default chatApp
