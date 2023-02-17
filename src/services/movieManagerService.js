import { GROUP_ID } from '../util/settings'
import { del, get, post } from './baseService'

export const getMovieService = (nameMovie = '') => {
  if (nameMovie !== '') return get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${nameMovie}`)
  return get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&?tenPhim=${nameMovie}`)
}

export const addNewMovieService = (formData) => post('api/QuanLyPhim/ThemPhimUploadHinh', formData)

export const delMovieService = (movieCode) => del(`api/QuanLyPhim/XP?MaPhim==${movieCode}`)

export const getFilmDetailService = (movieCode) => get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`)

export const updateFilmService = (formData) => post('api/QuanLyPhim/CapNhatPhimUpload', formData)
