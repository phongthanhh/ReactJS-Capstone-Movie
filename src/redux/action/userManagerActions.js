import axios from "axios"
import { history } from "../../App";
import { addUserService, getListUserService, getUserDetailService, updateUserService } from "../../services/userManagerServices";
import { GET_LIST_USER, SET_USER_DETAIL } from "../types/UserManagerTypes/userManagerTypes";



export const getListUserAction = () => {
    return async dispatch => {
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
}

export const addtUserAction = (data) => {
    return async dispatch => {
        try {
            const result = await addUserService(data)
            alert('thêm thành công')
            console.log(result.data.content)
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}

export const getUserDetailAction = (data) => {
    return async dispatch => {
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
}

export const updateUserAction = (data) => {
    return async dispatch => {
        try {
            const result = await updateUserService(data)
            console.log(result.data.content)
            alert('success')

        } catch (error) {
            console.log(error.response?.data)
        }
    }
}