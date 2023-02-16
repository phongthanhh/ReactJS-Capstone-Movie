import { GET_LIST_FILMS, SET_FILM_DETAIL } from '../types/movieManageTypes/movieManageTypes'

const initialState = {
  arrFilms: [
  ],
  infoFilmDetail: {}
}

export const movieManagerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_FILMS:
      return { ...state, arrFilms: payload }
    case SET_FILM_DETAIL:
      return { ...state, infoFilmDetail: payload }
    default:
      return state
  }
}
