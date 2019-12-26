import axios from 'axios'

import { urlLinkedList } from '../urls'

export const setLinkList = () => {
  return dispatch => {
    axios
      .get(urlLinkedList())
      .then(res => {
        dispatch({
          type: 'SET_LINK_LIST',
          payload: {
            isLoaded: true,
            data: res.data
          }
        })
      })
      .catch(() => {
        dispatch({
          type: 'SET_LINK_LIST',
          payload: {
            isLoaded: true,
            data: []
          }
        })
      })
  }
}
