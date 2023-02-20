import { bookTicketService, getTicketRoomService } from '../../services/bookTicketService'
import { GET_TICKET_ROOM, SELECT_SEAT } from '../types/bookTicketManageTypes/bookTicketManageType'

export const getTicketRoomAction = (codeShows) => async (dispatch) => {
  try {
    const result = await getTicketRoomService(codeShows)
    dispatch({
      type: GET_TICKET_ROOM,
      payload: result.data.content
    })
  } catch (error) {
    console.log(error.response?.data)
  }
}

export const bookTicketAction = (infoBookTicket) => async () => {
  try {
    const result = await bookTicketService(infoBookTicket)
    console.log(result)
  } catch (error) {
    console.log(error.response?.data)
  }
}

export const selectSeatAction = (payload) => ({
  type: SELECT_SEAT,
  payload
})
