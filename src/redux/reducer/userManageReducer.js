import { USER_LOGIN } from 'constant'
import {
  GET_LIST_USER, LOG_IN, SET_USER_DETAIL, SIGN_OUT
} from '../types/UserManagerTypes/userManagerTypes'

// Check LocalStorage
let userLogin = null // Chưa có localStorage
if (localStorage.getItem(USER_LOGIN)) {
  // Có local => đã login
  userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
  arrUser: [],
  userDetail: {},
  userLogin
}

export const userManageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_USER:
      return { ...state, arrUser: payload }

    case SET_USER_DETAIL:
      return { ...state, userDetail: payload }

    case LOG_IN:
      return { ...state, userLogin: payload }
    case SIGN_OUT:
      return { ...state, userLogin: null }
    default:
      return state
  }
}
