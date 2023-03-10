import { ROUTES_NAME } from 'constant'
import { toast } from 'react-toastify'
import { history } from '../../App'
import {
  addNewMovieService, delMovieService, getFilmDetailService, getMovieService, updateFilmService
} from '../../services/movieManagerService'

import { GET_LIST_FILMS, SET_FILM_DETAIL } from '../types/movieManageTypes/movieManageTypes'
import { displayLoadingAction, hideLoadingAction } from './loadingAction'

export const getFilmAction = (nameMovie = '') => async (dispatch) => {
  try {
    dispatch(displayLoadingAction)
    const result = await getMovieService(nameMovie)
    dispatch({
      type: GET_LIST_FILMS,
      payload: result.data.content
    })
    dispatch(hideLoadingAction)
  } catch (error) {
    toast.error(error.response?.data.content)
    dispatch(hideLoadingAction)
  }
}

export const addNewFilmAction = (formData) => async (dispatch) => {
  try {
    dispatch(displayLoadingAction)
    await addNewMovieService(formData)
    toast.success('Add Movie Success !')
    history.push(ROUTES_NAME.ADMIN_FILMS)
    dispatch(hideLoadingAction)
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const getFilmDetailAction = (codeMovie) => async (dispatch) => {
  try {
    dispatch(displayLoadingAction)
    const result = await getFilmDetailService(codeMovie)
    dispatch({
      type: SET_FILM_DETAIL,
      payload: result.data.content
    })
    dispatch(hideLoadingAction)
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const updateFilmAction = (formData) => async () => {
  try {
    await updateFilmService(formData)
    toast.success('Update User Success !')
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const delFilmAction = (codeMovie) => async (dispatch) => {
  try {
    await delMovieService(codeMovie)
    await dispatch(getFilmAction())
    toast.success('Delete Movie Success !')
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}
