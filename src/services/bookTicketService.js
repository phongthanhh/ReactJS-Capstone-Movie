import { get } from './baseService'

export const getTicketRoomService = (codeShows) => get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${codeShows}`)
