import { DISPLAY_LOADING, HIDE_LOADING } from 'redux/types'

const initialState = {
  isLoading: false
}

export const loadingReducer = (state = initialState, { type }) => {
  switch (type) {
    case DISPLAY_LOADING:
      return { ...state, isLoading: true }
    case HIDE_LOADING:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
