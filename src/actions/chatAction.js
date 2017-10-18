import {
  BASE_URL,

  CHAT_LIST_URL,
  CHAT_VIEW_URL,
  CHAT_ADD_URL,

  CHAT_LIST_ERROR,
  CHAT_LIST_LOADING,
  CHAT_LIST_SUCCESS,

  CHAT_VIEW_ERROR,
  CHAT_VIEW_LOADING,
  CHAT_VIEW_SUCCESS,

  CHAT_ADD_ERROR,
  CHAT_ADD_LOADING,
  CHAT_ADD_SUCCESS
} from './constant'

const chatListError = (bool) => {
  return {
    type: CHAT_LIST_ERROR,
    chatListError: bool
  }
}

const chatListLoading  = (bool) => {
  return {
    type: CHAT_LIST_LOADING,
    chatListLoading: bool
  }
}

const chatListSuccess = (bool, chats) => {
  return {
    type: CHAT_LIST_SUCCESS,
    chatListSuccess: bool,
    chats
  }
}

/**
 * Get chat list given its parent
 * @return {Chats} Chat array
 */
export function getListChat(parent) {
  return (dispatch) => {
    dispatch(chatListSuccess(false, null))
    dispatch(chatListError(false))
    dispatch(chatListLoading(true))

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: parent
      })
    }

    fetch(BASE_URL + CHAT_LIST_URL, config)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(chatListLoading(false))
      return response
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        dispatch(chatListSuccess(true, data))
      } else {
        dispatch(chatListError(true))
      }
    })
    .catch((err) => {
      dispatch(chatListError(true))
    })
  }
}

const chatViewError = (bool) => {
  return {
    type: CHAT_VIEW_ERROR,
    chatViewError: bool
  }
}

const chatViewLoading = (bool) => {
  return {
    type: CHAT_VIEW_LOADING,
    chatViewLoading: bool
  }
}

const chatViewSuccess = (bool, chat) => {
  return {
    type: CHAT_VIEW_SUCCESS,
    chatViewSuccess: bool,
    chat
  }
}

/**
 * View chat
 * @param  {String} id Chat ID
 * @return {Object}    Chat
 */
export function getViewChat(id) {
  return (dispatch) => {
    dispatch(chatViewSuccess(false, null))
    dispatch(chatViewError(false))
    dispatch(chatViewLoading(true))

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    }

    fetch(BASE_URL + CHAT_VIEW_URL, config)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(chatViewLoading(false))
      return response
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        dispatch(chatViewSuccess(true, data))
      } else {
        dispatch(chatViewError(true))
      }
    })
    .catch((err) => {
      dispatch(chatViewError(true))
    })
  }
}

const chatAddError = (bool) => {
  return {
    type: CHAT_ADD_ERROR,
    chatAddError: bool
  }
}

const chatAddLoading  = (bool) => {
  return {
    type: CHAT_ADD_LOADING,
    chatAddLoading: bool
  }
}

const chatAddSuccess = (bool, chat) => {
  return {
    type: CHAT_ADD_SUCCESS,
    chatAddSuccess: bool,
    chat
  }
}

/**
 * Add chat
 * @param {Object} data Chat
 */
export function addChat(data) {
  return (dispatch) => {
    dispatch(chatAddSuccess(false, null))
    dispatch(chatAddError(false))
    dispatch(chatAddLoading(true))

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(BASE_URL + CHAT_ADD_URL, config)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(chatAddLoading(false))
      return response
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        dispatch(chatAddSuccess(true, data))
      } else {
        dispatch(chatAddError(true))
      }
    })
    .catch((err) => {
      dispatch(chatAddError(true))
    })
  }
}
