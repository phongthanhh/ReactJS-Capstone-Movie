import { GET_TICKET_ROOM } from '../types/bookTicketManageTypes/bookTicketManageType'

const initialState = {
  ticketRoomDetail: {}
}

export const bookTicketManageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TICKET_ROOM:
      return { ...state, ticketRoomDetail: payload }

    default:
      return state
  }
}
