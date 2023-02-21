import { history } from 'App'
import { ACCESS_TOKEN, ROUTES_NAME, USER_LOGIN } from 'constant'
import { toast } from 'react-toastify'
import {
  addUserService, delUserService, getListUserService, getUserDetailService, registerService, signInService, updateUserService
} from '../../services/userManagerServices'
import { GET_LIST_USER, LOG_IN, SET_USER_DETAIL } from '../types/UserManagerTypes/userManagerTypes'

export const getListUserAction = () => async (dispatch) => {
  try {
    const result = await getListUserService()
    dispatch({
      type: GET_LIST_USER,
      payload: result.data.content
    })
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const addtUserAction = (data) => async () => {
  try {
    const result = await addUserService(data)
    toast.success('Add User Success !')
    console.log(result.data.content)
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const getUserDetailAction = (data) => async (dispatch) => {
  try {
    const result = await getUserDetailService(data)
    dispatch({
      type: SET_USER_DETAIL,
      payload: result.data.content
    })
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const updateUserAction = (data) => async () => {
  try {
    await updateUserService(data)
    toast.success('Upadte User Success !')
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const delUserAction = (data) => async (dispatch) => {
  try {
    await delUserService(data)
    await dispatch(getListUserAction())
    toast.success('Del User Success !')
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const signInAction = (data) => async (dispatch) => {
  try {
    const result = await signInService(data)
    window.localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken)
    window.localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content))
    dispatch({
      type: LOG_IN,
      payload: result.data.content
    })
    history.push(ROUTES_NAME.HOME)
    toast.success('Sign In Success !')
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const registerAction = (data) => async () => {
  try {
    await registerService(data)
    toast.success('Sign Up Success !')
    history.push(ROUTES_NAME.LOGIN)
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}
