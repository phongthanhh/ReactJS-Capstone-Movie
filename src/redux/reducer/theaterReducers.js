import { SET_HE_THONG_RAP } from 'redux/types/theaterTypes/theaterType'

const initialState = {
  arrHeThongRap: []
}

export const theaterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HE_THONG_RAP:
      return { ...state, arrHeThongRap: payload }
    default:
      return state
  }
}
