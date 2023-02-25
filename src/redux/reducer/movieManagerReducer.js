import { GET_LIST_FILMS, SET_FILM_DETAIL } from '../types/movieManageTypes/movieManageTypes'

const initialState = {
  arrFilms: [
  ],
  infoFilmDetail: {},
  moviesShowing: [],
  moviesUpComing: []

}

export const movieManagerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_FILMS: {
      const newMovieShowing = payload.filter((film) => film.dangChieu)
      const newMoviesUpComing = payload.filter((film) => film.sapChieu)
      return {
        ...state,
        arrFilms: payload,
        moviesShowing: newMovieShowing,
        moviesUpComing: newMoviesUpComing
      }
    }
    case SET_FILM_DETAIL:
      return { ...state, infoFilmDetail: payload }
    default:
      return state
  }
}
