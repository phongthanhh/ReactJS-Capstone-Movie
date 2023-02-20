import { history } from '../../App'
import {
  addNewMovieService, delMovieService, getFilmDetailService, getMovieService, updateFilmService
} from '../../services/movieManagerService'

import { GET_LIST_FILMS, SET_FILM_DETAIL } from '../types/movieManageTypes/movieManageTypes'

export const getFilmAction = (nameMovie = '') => async (dispatch) => {
  try {
    const result = await getMovieService(nameMovie)
    dispatch({
      type: GET_LIST_FILMS,
      payload: result.data.content
    })
  } catch (error) {
    console.log(error.response?.data)
  }
}

export const addNewFilmAction = (formData) => async () => {
  try {
    const result = await addNewMovieService(formData)
    console.log(result.data.content)
    alert('thành công')
    history.push('/admin/films')
  } catch (error) {
    console.log(error.response?.data)
  }
}

export const getFilmDetailAction = (codeMovie) => async (dispatch) => {
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

export const updateFilmAction = (formData) => async () => {
  try {
    const result = await updateFilmService(formData)
    console.log(result.data.content)
    alert('cập nhật thành công')
  } catch (error) {
    console.log(error.response?.data)
  }
}

export const delFilmAction = (codeMovie) => async () => {
  try {
    const result = await delMovieService(codeMovie)
    console.log(result.data.content)
    alert('xóa thành công')
  } catch (error) {
    console.log(error.response?.data)
  }
}
