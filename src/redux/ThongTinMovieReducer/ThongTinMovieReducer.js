const initialState = 0

export const ThongTinMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MA_PHIM':
      return action.id
    default:
      return state
  }
}
