import {
  addUserService, delUserService, getListUserService, getUserDetailService, updateUserService
} from '../../services/userManagerServices'
import { GET_LIST_USER, SET_USER_DETAIL } from '../types/UserManagerTypes/userManagerTypes'

export const getListUserAction = () => async (dispatch) => {
  try {
    const result = await getListUserService()
    // retussrn result.data.content
    dispatch({
      type: GET_LIST_USER,
      payload: result.data.content
    })
  } catch (error) {
    console.log(error.response?.data)
  }
}

export const addtUserAction = (data) => async () => {
  try {
    const result = await addUserService(data)
    alert('thêm thành công')
    console.log(result.data.content)
  } catch (error) {
    console.log(error.response?.data)
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
    console.log(error.response?.data)
  }
}

export const updateUserAction = (data) => async () => {
  try {
    const result = await updateUserService(data)
    console.log(result.data.content)
    alert('success')
  } catch (error) {
    console.log(error.response?.data)
  }
}

export const delUserAction = (data) => async () => {
  try {
    const result = await delUserService(data)
    console.log(result.data.content)
    alert('del success')
  } catch (error) {
    console.log(error.response?.data)
  }
}
