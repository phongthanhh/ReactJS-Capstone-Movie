import { getTicketRoomService } from '../../services/bookTicketService'
import { GET_TICKET_ROOM } from '../types/bookTicketManageTypes/bookTicketManageType'

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
