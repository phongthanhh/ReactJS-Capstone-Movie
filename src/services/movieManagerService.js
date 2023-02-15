import { DOMAIN, GROUP_ID } from "../util/settings"
import { apiClient, del, get, post } from "./baseService"

export const getAllMovieService = () => get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)

export const addNewMovieService = formData => post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData)

export const delMovieService = movieCode => del(`api/QuanLyPhim/XoaPhim?MaPhim=${movieCode}`)

export const getFilmDetailService = movieCode => get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`)

export const updateFilmService = formData => post(`api/QuanLyPhim/CapNhatPhimUpload`, formData)