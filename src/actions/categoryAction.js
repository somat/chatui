import {
  BASE_URL,

  CATEGORY_LIST_URL,
  CATEGORY_VIEW_URL,

  CATEGORY_LIST_ERROR,
  CATEGORY_LIST_LOADING,
  CATEGORY_LIST_SUCCESS,

  CATEGORY_VIEW_ERROR,
  CATEGORY_VIEW_LOADING,
  CATEGORY_VIEW_SUCCESS,
} from './constant'

const categoryListError = (bool) => {
  return {
    type: CATEGORY_LIST_ERROR,
    categoryListError: bool
  }
}

const categoryListLoading  = (bool) => {
  return {
    type: CATEGORY_LIST_LOADING,
    categoryListLoading: bool
  }
}

const categoryListSuccess = (bool, categories) => {
  return {
    type: CATEGORY_LIST_SUCCESS,
    categoryListSuccess: bool,
    categories
  }
}

/**
 * Get category list given its parent
 * @return {Categorys} Category array
 */
export function getListCategory() {
  return (dispatch) => {
    dispatch(categoryListSuccess(false, null))
    dispatch(categoryListError(false))
    dispatch(categoryListLoading(true))

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(BASE_URL + CATEGORY_LIST_URL, config)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(categoryListLoading(false))
      return response
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        dispatch(categoryListSuccess(true, data))
      } else {
        dispatch(categoryListError(true))
      }
    })
    .catch((err) => {
      dispatch(categoryListError(true))
    })
  }
}

const categoryViewError = (bool) => {
  return {
    type: CATEGORY_VIEW_ERROR,
    categoryViewError: bool
  }
}

const categoryViewLoading = (bool) => {
  return {
    type: CATEGORY_VIEW_LOADING,
    categoryViewLoading: bool
  }
}

const categoryViewSuccess = (bool, category) => {
  return {
    type: CATEGORY_VIEW_SUCCESS,
    categoryViewSuccess: bool,
    category
  }
}

/**
 * View category
 * @param  {String} id Category ID
 * @return {Object}    Category
 */
export function getViewCategory(id) {
  return (dispatch) => {
    dispatch(categoryViewSuccess(false, null))
    dispatch(categoryViewError(false))
    dispatch(categoryViewLoading(true))

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    }

    fetch(BASE_URL + CATEGORY_VIEW_URL, config)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(categoryViewLoading(false))
      return response
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        dispatch(categoryViewSuccess(true, data))
      } else {
        dispatch(categoryViewError(true))
      }
    })
    .catch((err) => {
      dispatch(categoryViewError(true))
    })
  }
}
