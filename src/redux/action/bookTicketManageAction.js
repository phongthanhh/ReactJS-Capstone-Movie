import { bookTicketService, getTicketRoomService } from '../../services/bookTicketService'
import { BOOK_TICKET_SUCCESS, GET_TICKET_ROOM, SELECT_SEAT } from '../types/bookTicketManageTypes/bookTicketManageType'
import { displayLoadingAction, hideLoadingAction } from './loadingAction'

export const getTicketRoomAction = (codeShows) => async (dispatch) => {
  try {
    dispatch(displayLoadingAction)
    const result = await getTicketRoomService(codeShows)
    dispatch({
      type: GET_TICKET_ROOM,
      payload: result.data.content
    })
    dispatch(hideLoadingAction)
  } catch (error) {
    console.log(error.response?.data)
    dispatch(hideLoadingAction)
  }
}

export const bookTicketAction = (infoBookTicket) => async (dispatch) => {
  try {
    dispatch(displayLoadingAction)
    const result = await bookTicketService(infoBookTicket)
    await dispatch(getTicketRoomAction(infoBookTicket.maLichChieu))
    await dispatch({ type: BOOK_TICKET_SUCCESS })
    dispatch(hideLoadingAction)
    console.log(result)
  } catch (error) {
    console.log(error.response?.data)
  }
}

export const selectSeatAction = (payload) => ({
  type: SELECT_SEAT,
  payload
})
