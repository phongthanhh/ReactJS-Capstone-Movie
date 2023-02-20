import { BOOK_TICKET_SUCCESS, GET_TICKET_ROOM, SELECT_SEAT } from '../types/bookTicketManageTypes/bookTicketManageType'

const initialState = {
  ticketRoomDetail: {},
  seatsSelecting: []
}

export const bookTicketManageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TICKET_ROOM:
      console.log(payload)
      return { ...state, ticketRoomDetail: payload }
    case SELECT_SEAT: {
      const indexSeat = state.ticketRoomDetail.danhSachGhe.findIndex((seat) => seat.maGhe === payload.maGhe)
      const newSeats = [...state.ticketRoomDetail.danhSachGhe]
      newSeats[indexSeat].selecting = !newSeats[indexSeat].selecting

      const newSeatSelecting = [...state.seatsSelecting]
      const IndexSeating = newSeatSelecting.findIndex((seating) => seating.maGhe === payload.maGhe)
      if (IndexSeating !== -1) {
        newSeatSelecting.splice(IndexSeating, 1)
      } else {
        newSeatSelecting.push(payload)
      }

      return {
        ...state,
        seatsSelecting: newSeatSelecting,
        ticketRoomDetail: {
          ...state.ticketRoomDetail, danhSachGhe: newSeats
        }
      }
    }
    case BOOK_TICKET_SUCCESS:
      return { ...state, seatsSelecting: [] }
    default:
      return state
  }
}
