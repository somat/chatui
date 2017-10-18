import { combineReducers } from 'redux'
import {
  CATEGORY_LIST_ERROR,
  CATEGORY_LIST_LOADING,
  CATEGORY_LIST_SUCCESS,

  CATEGORY_VIEW_ERROR,
  CATEGORY_VIEW_LOADING,
  CATEGORY_VIEW_SUCCESS
} from '../actions/constant'

const categoryListError = (state = false, action) => {
  switch (action.type) {
    case CATEGORY_LIST_ERROR:
      return action.categoryListError
    default:
      return state
  }
}

const categoryListLoading = (state = false, action) => {
  switch (action.type) {
    case CATEGORY_LIST_LOADING:
      return action.categoryListLoading
    default:
      return state
  }
}

const categoryListSuccess = (state = false, action) => {
  switch (action.type) {
    case CATEGORY_LIST_SUCCESS:
      return action.categoryListSuccess
    default:
      return state
  }
}

const categoryViewError = (state = false, action) => {
  switch (action.type) {
    case CATEGORY_VIEW_ERROR:
      return action.categoryViewError
    default:
      return state
  }
}

const categoryViewLoading = (state = false, action) => {
  switch (action.type) {
    case CATEGORY_VIEW_LOADING:
      return action.categoryViewLoading
    default:
      return state
  }
}

const categoryViewSuccess = (state = false, action) => {
  switch (action.type) {
    case CATEGORY_VIEW_SUCCESS:
      return action.categoryViewSuccess
    default:
      return state
  }
}

const categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORY_LIST_SUCCESS:
      return action.categories
    default:
      return state
  }
}

const category = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_VIEW_SUCCESS:
      return action.category
    default:
      return state
  }
}

const categoryReducer = combineReducers({
  categoryListError,
  categoryListLoading,
  categoryListSuccess,

  categoryViewError,
  categoryViewLoading,
  categoryViewSuccess,

  categories,
  category
})

export default categoryReducer
