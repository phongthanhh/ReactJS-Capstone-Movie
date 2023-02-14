import axios from "axios";
import { history } from "../../App";
import { addNewMovieService, getAllMovieService } from "../../services/movieManagerService";
import { DOMAIN, GROUP_ID, TOKEN_CYBER } from "../../util/settings";
import { GET_LIST_FILMS } from "../types/movieManageTypes/movieManageTypes";

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
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}