import { GET_LIST_FILMS } from "../types/movieManageTypes/movieManageTypes"

const initialState = {
    arrFilms: [

    ]
}

export const movieManagerReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_LIST_FILMS:
            return { ...state, arrFilms: payload }
        default:
            return state
    }
}
