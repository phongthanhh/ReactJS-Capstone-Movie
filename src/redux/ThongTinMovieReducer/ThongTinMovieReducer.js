const initialState = 0;

export const ThongTinMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MA_PHIM':
      state = action.id;
      return {...state}
  default:
    return state
  }
}
