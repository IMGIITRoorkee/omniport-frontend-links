const initialState = {
  isLoaded: false
}
const linkList = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LINK_LIST':
      return action.payload
    default:
      return state
  }
}

export default linkList
