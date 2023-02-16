import { get, post } from './baseService'

export const getHeThongRapService = () => get('api/QuanLyRap/LayThongTinHeThongRap')

export const getCumRapService = (theaterCode) => get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterCode}`)

export const createShowTimesService = (data) => post('api/QuanLyDatVe/TaoLichChieu', data)
