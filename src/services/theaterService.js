import { GROUP_ID } from 'constant'
import { get, post } from './baseService'

export const getHeThongRapService = () => get('api/QuanLyRap/LayThongTinHeThongRap')

export const getCumRapService = (theaterCode) => get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterCode}`)

export const createShowTimesService = (data) => post('api/QuanLyDatVe/TaoLichChieu', data)

export const getThongTinHeThongRapService = () => get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`)

export const getLichChieuPhimService = (movieCode) => get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieCode}`)
