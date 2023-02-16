import { GET_LIST_USER, SET_USER_DETAIL } from '../types/UserManagerTypes/userManagerTypes'

const initialState = {
  arrUser: [],
  userDetail: {}
}

export const userManageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_USER:
      return { ...state, arrUser: payload }

    case SET_USER_DETAIL:
      return { ...state, userDetail: payload }
    default:
      return state
  }
}
