import { get, post } from './baseService'

export const getTicketRoomService = (codeShows) => get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${codeShows}`)

export const bookTicketService = (infoBookTicket) => post('api/QuanLyDatVe/DatVe', infoBookTicket)
