import axios from "axios";
import { history } from "../../App";
import { addNewMovieService, delMovieService, getAllMovieService, getFilmDetailService, updateFilmService } from "../../services/movieManagerService";

import { GET_LIST_FILMS, SET_FILM_DETAIL } from "../types/movieManageTypes/movieManageTypes";

export const getFilmAction = () => {
    return async (dispatch) => {
        try {
            const result = await getAllMovieService()
            dispatch({
                type: GET_LIST_FILMS,
                payload: result.data.content
            })
        } catch (error) {
            console.log('thất bại')
        }
    }
}

export const addNewFilmAction = (formData) => {
    return async dispatch => {
        try {
            const result = await addNewMovieService(formData)
            console.log(result.data.content)
            alert('thành công')
            history.push('/admin/films')
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}

export const getFilmDetailAction = (codeMovie) => {
    return async dispatch => {
        try {
            const result = await getFilmDetailService(codeMovie)
            dispatch({
                type: SET_FILM_DETAIL,
                payload: result.data.content
            })
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}

export const updateFilmAction = (formData) => {
    return async dispatch => {
        try {
            const result = await updateFilmService(formData)
            console.log(result.data.content)
            alert('cập nhật thành công')
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}



export const delFilmAction = (codeMovie) => {
    return async dispatch => {
        try {
            const result = await delMovieService(codeMovie)
            console.log(result.data.content)
            alert('xóa thành công')
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}